<template>
  <div class="bar-container">
    <div>Horse Racing</div>
    <div>
      <div class="list-item list-header">
        <div>Position</div>
        <div>Name</div>
      </div>
      <div
        v-for="(horse, index) in props.horseList"
        :key="`horse_${index}_${horse.name}`"
        class="list-item"
      >
        <div>{{ index + 1 }}</div>
        <div>{{ horse.condition }}</div>
        <div>{{ horse.color }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  lap: Lap
}
const props = defineProps<Props>()
</script>

<style scoped>
.list-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.list-header {
  background-color: gray;
  font-weight: 500;
}
.list-item > div {
  padding: 5px 5px;
  /* background-color: white;
      color: black; */
  border: 1px gray solid;
}
</style>
