<template>
  <div class="bar-container">
    <div style="color: black">status: {{ props.status }}</div>

    <div class="animation-container">
      <div
        v-for="(horse, index) in lanes"
        :key="`horse_${index}_${horse.horseId}`"
        class="lane-container lane-border"
      >
        <div class="lane-start">
          {{ horse.lane }}
        </div>
        <div class="horse-avatar"></div>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; color: red; margin-top: 50px">
      <div></div>
      <div>lap {{ roundName }}</div>
      <div>finish</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Program, RoundName } from '../types/_race-program'

type Props = {
  status: 'started' | 'paused'
  program: Program
}
const props = defineProps<Props>()

// type Emit = {
//   (e: 'update:result', value: Record<string, RoundResult>): void
// }
// const emit = defineEmits<Emit>()

const roundName = ref<RoundName>('1200m')

// function getHorseColor(id: string) {
//   console.log(id)
//   // TODO
//   return 'teal'
// }

const lanes = computed(() => {
  console.log('props.program', props.program)
  const clone = [...props.program[roundName.value]]
  return clone.sort((lane1, lane2) => lane1.lane - lane2.lane)
})
</script>

<style scoped>
.animation-container {
  border-right: red 5px solid;
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
  width: 20px;
  height: 50px;
  text-align: center;
  background-color: darkgreen;
  color: white;
}

.horse-avatar {
  height: 25px;
  width: 25px;
  background-color: black;
  margin: auto 0px;
}
</style>
