<template>
  <header>
    <TopBar :status="status" @update:status="status = $event" @generateProgram="generateProgram" />
  </header>

  <main>
    <div style="display: flex; justify-content: space-between; gap: 20px">
      <HorseList :horseList="horses" />
      <RaceAnimation :status="status" :program="program" style="flex: 1 0 auto" />
      <div style="display: flex">
        <RacePrograms :program="program" />
        <RaceResults :results="results" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { generateHorses } from './utils/horse-util'
import { buildProgram, buildEmptyResults } from './utils/race-program-util'

const horses = ref<Horse[]>(generateHorses())
const program = ref<Program>(buildProgram([]))
const status = ref<'started' | 'paused'>('paused')
const results = ref<Results>(buildEmptyResults())

function generateProgram() {
  program.value = buildProgram(horses.value)
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
