<template>
  <div>
    <div style="color: black">status: {{ props.status }}</div>

    <div ref="containerRef" class="animation-container">
      <div
        v-for="index in Array.from(Array(10).keys())"
        :key="`lane_${index}`"
        class="lane-container lane-border"
      >
        <div class="lane-start">{{ index + 1 }}</div>
        <div class="horse-avatar" :style="getAnimatedHorseStyleFromLaneNo(index + 1)"></div>
      </div>
    </div>

    <div class="bottom-row">
      <div></div>
      <div>{{ PROGRAM.getRoundTitle(roundIndex + 1, roundName) }}</div>
      <div>FINISH</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, computed } from "vue";
import type { Program, LapName, Result, AnimatedHorse, Horse } from "@/types";
import { HORSE, RESULT, PROGRAM } from "@/utils";
import { useStore } from "@/store";

const store = useStore();

type Props = {
  status: "running" | "paused";
  program: Program;
  resetTrigger: number;
};
const props = defineProps<Props>();

type Emit = {
  (e: "update:result", value: { roundName: LapName; results: Result[] }): void;
  (e: "pause"): void;
};
const emit = defineEmits<Emit>();

const animatedHorses = ref<AnimatedHorse[]>(HORSE.bPlaceholderAnimatedHorses());

const roundOrder: LapName[] = ["1200m", "1400m", "1600m", "1800m", "2000m", "2200m"];
const roundIndex = ref(0);
const roundName = computed(() => roundOrder[roundIndex.value]);

const containerRef = ref<HTMLElement | null>(null);
const containerWidth = ref(0);

const horses = computed<Horse[]>(() => store.getters.allHorses);

let animationFrameId: number;
//const finishLine = 800 // Pixels to reach finish line (adjust as needed)

function updateContainerWidth() {
  if (containerRef.value) {
    containerWidth.value = containerRef.value.offsetWidth - 50; // minus margin for horse
    //console.log('containerWidth', containerWidth.value)
  }
}

function getAnimatedHorseStyleFromLaneNo(lane: number) {
  const horse = animatedHorses.value.find(horse => horse.lane == lane);
  if (!horse) {
    console.warn(`horse at lane ${lane} not found`);
    return {}; // no bg-color before a program is set
  }
  //console.log('hop1')
  return {
    "background-color": getHorseColor(horse.horseId),
    transform: `translateX(${(horse.positionPercent / 100) * containerWidth.value}px)`,
  };
}

function getHorseColor(id: string): string {
  const horse = horses.value.find(h => h.id == id);
  return horse ? horse.color : "black";
}

function initHorses() {
  const lanes = props.program[roundName.value];
  const lapResults = RESULT.generateLapResult(lanes);
  animatedHorses.value = HORSE.createAnimatedHorses(lanes, lapResults);
}

// Animation loop
function animate() {
  let allFinished = true;

  animatedHorses.value.forEach(horse => {
    if (horse.positionPercent < 100) {
      horse.positionPercent += horse.speed;
      if (horse.positionPercent > 100) horse.positionPercent = 100;
      allFinished = false;
    }
  });

  if (allFinished) {
    handleLapFinish();
  } else {
    animationFrameId = requestAnimationFrame(animate);
  }
}

// Start animation loop
function startAnimation() {
  cancelAnimationFrame(animationFrameId); // Cancel any old animation
  animationFrameId = requestAnimationFrame(animate);
}

// Stop animation
function stopAnimation() {
  cancelAnimationFrame(animationFrameId);
}

function handleLapFinish() {
  const results: Result[] = animatedHorses.value
    .slice()
    .sort((a, b) => b.speed - a.speed)
    .map((horse, index) => ({
      horseId: horse.horseId,
      position: index + 1,
    }));

  emit("update:result", { roundName: roundName.value, results });

  if (roundIndex.value < roundOrder.length - 1) {
    roundIndex.value++;
    initHorses();
    if (props.status === "running") {
      startAnimation();
    }
  } else {
    emit("pause");
    console.log("All races finished!");
  }
}

// Watch status prop
watch(
  () => props.status,
  (newValue: "running" | "paused") => {
    if (newValue === "running") {
      startAnimation();
    } else if (newValue === "paused") {
      stopAnimation();
    }
  },
  { immediate: true }
);

watch(
  () => props.resetTrigger,
  () => {
    roundIndex.value = 0;
    initHorses();
    if (props.status === "running") {
      startAnimation();
    } else {
      stopAnimation();
    }
  }
);

onMounted(() => {
  initHorses();
  updateContainerWidth();
  window.addEventListener("resize", updateContainerWidth);
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
  window.removeEventListener("resize", updateContainerWidth);
});
</script>

<style scoped>
.animation-container {
  border-right: red 5px solid;
  padding-top: 30px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(10, auto);
}
.lane-border {
  border-bottom: 2px dashed black;
}
.lane-border:first-child {
  border-top: 2px dashed black;
}
.lane-container {
  margin-left: 10px;
  display: flex;
}

.lane-start {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  padding: 25px 5px;
  text-align: center;
  background-color: rgba(5, 119, 5, 0.589);
  color: white;
}

.horse-avatar {
  height: 25px;
  width: 25px;
  /* background-color: black; */
  margin: auto 0px;
}
.bottom-row {
  display: flex;
  justify-content: space-between;
  color: red;
  margin-top: 20px;
}
.bottom-row > div {
  font-weight: 500;
}
</style>
