<template>
  <div class="bar-container">
    <div class="bar-title">Horse Racing</div>
    <div>
      <button @click="generateProgram" class="buttons">Generate Program</button>
      <button @click="toggleStatus" class="buttons">Start / Pause</button>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  status: 'running' | 'paused'
}
const props = defineProps<Props>()

type Emit = {
  (e: 'generateProgram'): void
  (e: 'update:status', value: 'running' | 'paused'): void
}
const emit = defineEmits<Emit>()

function generateProgram() {
  console.log('generateProgram')
  emit('generateProgram')
}

function toggleStatus() {
  switch (props.status) {
    case 'running':
      emit('update:status', 'paused')
      break
    case 'paused':
      emit('update:status', 'running')
      break
    default:
      console.log('status', props.status)
  }
}
</script>

<style scoped>
.bar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  padding: 0px 30px;
  background-color: rgb(250, 130, 180);
  height: 80px;
}
.bar-title {
  font-size: larger;
  font-weight: 500;
}
.buttons {
  margin: 0px 10px;
}
</style>
