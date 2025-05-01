<template>
  <header>
    <TopBar :status="status" @update:status="setStatus" @generateProgram="generateProgram" />
  </header>

  <main>
    <HorseList :horses="horses" />
    <RaceAnimation
      :status="status"
      :program="program"
      :horses="horses"
      :resetTrigger="resetTrigger"
      style="flex: 1 0 auto"
      @update:status="setStatus"
      @update:result="updateResult"
    />
    <ProgramDetails
      :program="program"
      :results="results"
      :horses="horses"
      style="display: flex; width: 350px"
    />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { PROGRAM, HORSE, RESULT } from "@/utils";
import type { Horse, Program, ProgramResults, Result, LapName } from "@/types";

const horses = ref<Horse[]>(HORSE.generateHorses());
const program = ref<Program>(PROGRAM.buildProgram([]));
const status = ref<"running" | "paused">("paused");
const results = ref<ProgramResults>(RESULT.buildEmptyResults());
const resetTrigger = ref(0);

function setStatus(newStatus: "running" | "paused") {
  if (PROGRAM.isProgramEmpty(program.value)) {
    console.warn("no program set yet. Cannot change status");
    return;
  }
  switch (newStatus) {
    case "running":
      if (RESULT.allLapsDone(results.value)) {
        console.log("all laps are already done. reseting results");
        results.value = RESULT.buildEmptyResults();
        resetAnimation();
      }
      status.value = newStatus;
      break;
    case "paused":
      console.log("pausing");
      status.value = newStatus;
      break;
  }
}

function resetAnimation() {
  resetTrigger.value++; // 👈 Triggers the animation reset
}

function generateProgram() {
  program.value = PROGRAM.buildProgram(horses.value);
  setStatus("paused");
  results.value = RESULT.buildEmptyResults();
  resetAnimation();
}

function updateResult(event: { roundName: LapName; results: Result[] }) {
  results.value[event.roundName] = event.results;
}
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
