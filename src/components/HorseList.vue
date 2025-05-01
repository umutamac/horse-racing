<template>
  <div class="bar-container">
    <div class="title">Horse List (1-{{ horses.length }})</div>
    <div class="horse-list">
      <div class="list-item list-header">Name</div>
      <div class="list-item list-header">Condition</div>
      <div class="list-item list-header">Color</div>
      <template v-for="(horse, index) in horses" :key="`horse_${index}_${horse.id}`">
        <div class="list-item">{{ horse.name }}</div>
        <div class="list-item">{{ horse.condition }}</div>
        <div class="list-item">{{ horse.color }}</div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Horse } from "@/types";
import { useStore } from "@/store";

const store = useStore();
const horses = computed<Horse[]>(() => {
  //console.log("store", store);
  return store.getters.allHorses;
});
</script>

<style scoped>
.title {
  background-color: yellow;
  color: black;
  padding: 5px;
  border: 1px solid gray;
}
.horse-list {
  display: grid;
  grid-template-columns: auto auto auto;

  overflow-y: auto;
}

.list-item {
  background-color: white;
  color: black;

  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  padding: 5px;
  text-align: center;
}

.list-item:first {
  border-top: 1px solid gray;
}
.list-item:nth-child(3n) {
  border-right: 1px solid gray;
}
.list-header {
  background-color: rgb(218, 218, 218);
  font-weight: 500;
}
</style>
