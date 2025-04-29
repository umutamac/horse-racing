<template>
  <header>
    <TopBar :status="status" @update:status="setStatus" @generateProgram="generateProgram" />
  </header>

  <main>
    <div style="display: flex; justify-content: space-between; gap: 20px">
      <HorseList :horseList="horses" />
      <RaceAnimation
        :status="status"
        :program="program"
        :resetTrigger="resetTrigger"
        style="flex: 1 0 auto"
        @update:status="setStatus"
        @update:result="updateResult"
      />
      <div style="display: flex">
        <RacePrograms :program="program" />
        <RaceResults :results="results" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { PROGRAM, HORSE, RESULT } from '@/utils'
import type { Horse, Program, ProgramResults, Result, LapName } from '@/types'

const horses = ref<Horse[]>(HORSE.generateHorses())
const program = ref<Program>(PROGRAM.buildProgram([]))
const status = ref<'running' | 'paused'>('paused')
const results = ref<ProgramResults>(RESULT.buildEmptyResults())
const resetTrigger = ref(0)

function setStatus(newStatus: 'running' | 'paused') {
  if (PROGRAM.isProgramEmpty(program.value)) {
    console.warn('no program set yet. Cannot change status')
    return
  }
  switch (newStatus) {
    case 'running':
      if (RESULT.allLapsDone(results.value)) {
        console.log('all laps are already done. reseting results')
        results.value = RESULT.buildEmptyResults()
        resetAnimation()
      }
      status.value = newStatus
      break
    case 'paused':
      console.log('pausing')
      status.value = newStatus
      break
  }
}

function resetAnimation() {
  resetTrigger.value++ // 👈 Triggers the animation reset
}

function generateProgram() {
  program.value = PROGRAM.buildProgram(horses.value)
  setStatus('paused')
  results.value = RESULT.buildEmptyResults()
  resetAnimation()
}

function updateResult(event: { roundName: LapName; results: Result[] }) {
  results.value[event.roundName] = event.results
}

onMounted(() => {
  //horses.value = generateHorses()
})
</script>
<style scoped>
header {
  line-height: 1.5;
}

/* .logo {
  display: block;
} */

main {
  margin-top: 10px;
  padding: 0px 30px;

  height: 100%;
  overflow: hidden; /* 🚫 Disable scrollbars on page */
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
