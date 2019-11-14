<template>
  <div
    v-if="tantoVisto!=null"
    class="progress-bar"
  >
    <span class="score">{{ score }}</span>
    <span class="title-progress">{{ cell.name }}</span>
    <div
      class="progress"
      :style="{ width: tantoVisto + '%'}"
    />
  </div>
</template>
<script src="./ProgressBar.js"></script>
<style lang="scss" scoped>
  @import "./ProgressBar.scss";
</style>
