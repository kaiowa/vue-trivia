<template>
	<div class="question">
		
		<div class="category"><p class="message">{{questionType.name}}</p></div>
		<div class="question-title">{{question.question}}</div>
		<div class="timer">
			<TimerBar seconds=10 @finish="finishQuestion" :statusStop="statusStopTimer"></TimerBar> 
		</div>
		<div class="answers">
			<div class="message failed" v-if="answered && !correct"></div>
			<div class="message right" v-if="answered && correct"></div>

			<div v-for="(item,index) in answers" :key="index">
				<button class="answer-button" @click="sendAnswer(item.id)" :class="getClassAnswered(item.id)" >
					{{item.text}}
				</button>
			</div>

		</div>
	</div>

</template>
<script src="./ModalQuestion.js"></script>
<style lang="scss" scoped>
  @import "./ModalQuestion.scss";
</style>
