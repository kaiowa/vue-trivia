<template>
  <div class="scoreboard">
    <div
      v-if="scores"
      class="scores"
    >
      <ProgressBar
        v-for="item in scores"
        :key="item.id"
        :score="item.score"
        :cell="item"
      />
    </div>
  </div>
</template>
<script src="./ScoreBoard.js"></script>
<style lang="scss" scoped>
  @import "./ScoreBoard.scss";
</style>
