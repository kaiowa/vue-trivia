<template>
	<div class="scoreboard">
		
		<div class="scores" v-if="scores">
			<ProgressBar v-for="item in scores" :key="item.id" :score="item.score" :cell="item"></ProgressBar>
		</div>
	</div>

</template>
<script src="./ScoreBoard.js"></script>
<style lang="scss" scoped>
  @import "./ScoreBoard.scss";
</style>
