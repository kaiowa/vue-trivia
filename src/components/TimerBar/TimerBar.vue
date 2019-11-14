<template>
	<div class="timerbar">
		<div class="progress" v-bind:style="{ width: progress + '%'}" v-if="progress" ></div>
	</div>
</template>
<script src="./TimerBar.js"></script>
<style lang="scss" scoped>
  @import "./TimerBar.scss";
</style>
