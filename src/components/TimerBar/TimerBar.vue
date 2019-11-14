<template>
  <div class="timerbar">
    <div
      v-if="progress"
      class="progress"
      :style="{ width: progress + '%'}"
    />
  </div>
</template>
<script src="./TimerBar.js"></script>
<style lang="scss" scoped>
  @import "./TimerBar.scss";
</style>
