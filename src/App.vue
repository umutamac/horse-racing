<template>
  <header>
    <TopBar>
      <button @click="generateProgram">Generate Program</button>
      <button @click="toggleStatus">Start / Pause</button>
    </TopBar>
  </header>

  <main>
    <HorseList />
    <RaceAnimation
      :status="status"
      :program="program"
      :resetTrigger="resetTrigger"
      style="flex: 1 0 auto"
      @update:status="pause"
      @update:result="updateResult"
    />
    <ProgramDetails :program="program" :results="results" style="display: flex; width: 350px" />
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { PROGRAM, HORSE, RESULT } from "@/utils";
import type { Horse, Program, ProgramResults, Result, LapName, Status } from "@/types";
import { useStore } from "@/store";

const store = useStore();

//const horses = ref<Horse[]>(HORSE.generateHorses());
const program = ref<Program>(PROGRAM.buildProgram([]));
const status = ref<Status>("paused");
const results = ref<ProgramResults>(RESULT.buildEmptyResults());
const resetTrigger = ref(0);

const horses = computed<Horse[]>(() => store.getters.allHorses);

function pause() {
  console.log("pausing");
  status.value = "paused";
}

function toggleStatus() {
  switch (status.value) {
    case "paused":
      if (PROGRAM.isProgramEmpty(program.value)) {
        console.warn("no program set yet. Cannot change status");
        return;
      }
      if (RESULT.allLapsDone(results.value)) {
        console.log("all laps are already done. reseting results");
        results.value = RESULT.buildEmptyResults();
        resetAnimation();
      }
      status.value = "running";
      break;
    case "running":
      status.value = "paused";
      break;
  }
}

function resetAnimation() {
  resetTrigger.value++; // 👈 Triggers the animation reset
}

function generateProgram() {
  program.value = PROGRAM.buildProgram(horses.value);
  status.value = "paused";
  results.value = RESULT.buildEmptyResults();
  resetAnimation();
}

function updateResult(event: { roundName: LapName; results: Result[] }) {
  results.value[event.roundName] = event.results;
}

onMounted(() => {
  store.commit("setHorses", HORSE.generateHorses());
});
</script>
<style scoped>
header {
  line-height: 1.5;
}

main {
  display: flex;
  justify-content: space-between;
  gap: 50px;

  background-color: rgb(201, 201, 201);
  padding: 10px 30px;

  height: 838px;
  overflow-y: hidden;
}
</style>
