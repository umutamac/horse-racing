<template>
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
            v-for="(resultItem, roundItemIndex) in getRoundResult(roundName)"
            :key="`round_item_${roundItemIndex}_${resultItem.horseId}`"
          >
            <div class="list-item">{{ resultItem.position }}</div>
            <div class="list-item">{{ getHorseName(resultItem.horseId) }}</div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProgramResults, LapName, Horse } from '@/types'

type Props = {
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
  switch (roundNum) {
    case 1:
      return `1st Lap - ${name}`
    case 2:
      return `2nd Lap - ${name}`
    case 3:
      return `3rd Lap - ${name}`
    default:
      return `${roundNum}th Lap - ${name}`
  }
}

function getRoundResult(name: string) {
  const round = [...props.results[name as LapName]]
  return round.sort((r1, r2) => r1.position - r2.position)
}
</script>

<style scoped>
/* .scroll-container {
  height: 100%;
  overflow-y: scroll;
} */
.title {
  background-color: green;
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
