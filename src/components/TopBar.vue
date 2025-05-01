<template>
  <div class="bar-container">
    <div class="bar-title">Horse Racing</div>
    <div class="buttons-container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
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
.buttons-container > * {
  margin: 0px 10px;
}
</style>
