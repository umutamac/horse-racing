<template>
  <div class="program-container">
    <div class="title">Program</div>
    <div class="scroll-container">
      <div
        v-for="(roundName, roundIndex) in Object.keys(props.program)"
        :key="`round_${roundIndex}`"
      >
        <div class="round-title">{{ getRoundTitle(roundIndex + 1, roundName) }}</div>
        <div style="display: grid; grid-template-columns: auto 1fr">
          <div class="list-item list-header">Position</div>
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
</template>

<script setup lang="ts">
import type { Program, Lane, LapName } from '@/types'

type Props = {
  program: Program
}
const props = defineProps<Props>()

function getHorseName(id: string): string {
  // TODO: search from store
  return id
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

function getRound(name: string): Lane[] {
  return [...props.program[name as LapName]]
}
</script>

<style scoped>
.scroll-container {
  height: 100%; /* or a fixed height like 300px */
  overflow-y: scroll;
}
.title {
  background-color: blue;
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
