<template>
  <div
    class="dice"
    :class="getClassTirando()"
  >
    <div
      v-if="!rotating"
      :class="getDiceResult()"
      @click="launchDice()"
    />
    <div
      v-if="rotating"
      class="image-dice rotating"
    />
  </div>
</template>
<script src="./Dice.js"></script>
<style lang="scss" scoped>
  @import "./Dice.scss";
</style>
