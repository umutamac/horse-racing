<template>
  <div>
    <div class="program-container">
      <div class="title">Program</div>
      <div class="scroll-container">
        <div
          v-for="(roundName, roundIndex) in Object.keys(props.program)"
          :key="`round_${roundIndex}`"
        >
          <div class="round-title">{{ getRoundTitle(roundIndex + 1, roundName) }}</div>
          <div style="display: grid; grid-template-columns: auto 1fr">
            <div class="list-item list-header">Lane</div>
            <div class="list-item list-header">Name</div>
            <template
              v-for="(roundItem, roundItemIndex) in getRound(roundName)"
              :key="`round_item_${roundItemIndex}_${roundItem.horseId}`"
            >
              <div class="list-item">{{ roundItem.laneNo }}</div>
              <div class="list-item">{{ getHorseName(roundItem.horseId) }}</div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="result-container">
      <div class="title">Results</div>
      <div class="scroll-container">
        <div
          v-for="(roundName, roundIndex) in Object.keys(props.results)"
          :key="`round_result_${roundIndex}`"
        >
          <div class="round-title">{{ getRoundTitle(roundIndex + 1, roundName) }}</div>
          <div style="display: grid; grid-template-columns: auto 1fr">
            <div class="list-item list-header">Position</div>
            <div class="list-item list-header">Name</div>
            <template
              v-for="(resultItem, resultItemIndex) in getRoundResult(roundName)"
              :key="`result_item_${resultItemIndex}_${resultItem.horseId}`"
            >
              <div class="list-item">{{ resultItem.position }}</div>
              <div class="list-item">{{ getHorseName(resultItem.horseId) }}</div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProgramResults, LapName, Horse, Program, Lane } from '@/types'
import { PROGRAM } from '@/utils'

type Props = {
  program: Program
  results: ProgramResults
  horses: Horse[]
}
const props = defineProps<Props>()

function getHorseName(id: string) {
  const horse = props.horses.find((h) => h.id == id)
  return horse ? horse.name : '-'
  // TODO: search from store
}

function getRoundTitle(roundNum: number, name: string): string {
  return PROGRAM.getRoundTitle(roundNum, name)
}

function getRound(name: string): Lane[] {
  return [...props.program[name as LapName]]
}
function getRoundResult(name: string) {
  const round = [...props.results[name as LapName]]
  return round.sort((r1, r2) => r1.position - r2.position)
}
</script>

<style scoped>
.program-container,
.result-container {
  width: 200px;
}
.program-container .title {
  background-color: rgb(57, 110, 255);
}
.result-container .title {
  background-color: rgb(109, 168, 109);
}
.title {
  /* background-color: green; */
  color: black;
  text-align: center;
  font-weight: 600;
  font-size: x-large;
  padding: 10px auto;
  border: 1px solid gray;
}
.round-title {
  background-color: red;
  color: black;
  text-align: center;
  font-weight: 500;
}

.list-item {
  background-color: white;
  color: black;
  padding: 5px;
  text-align: center;
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
}
.list-item:first {
  border-top: 1px solid gray;
}
.list-item:nth-child(even) {
  border-right: 1px solid gray;
}
.list-header {
  background-color: rgb(218, 218, 218);
  font-weight: 500;
}
</style>
