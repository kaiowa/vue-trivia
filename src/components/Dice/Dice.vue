<template>
	<div class="dice" :class="getClassTirando()">
      <div :class="getDiceResult()" @click="launchDice()" v-if="!rotating"></div>
     <div class="image-dice rotating"  v-if="rotating"></div>
	</div>
</template>
<script src="./Dice.js"></script>
<style lang="scss" scoped>
  @import "./Dice.scss";
</style>
