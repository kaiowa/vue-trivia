<template>
	<div class="progress-bar" v-if="tantoVisto!=null">
    <span class="score">{{score}}</span>
    <span class="title-progress">{{cell.name}}</span>
    <div class="progress" :style="{ width: tantoVisto + '%'}"></div>
	</div>
</template>
<script src="./ProgressBar.js"></script>
<style lang="scss" scoped>
  @import "./ProgressBar.scss";
</style>
