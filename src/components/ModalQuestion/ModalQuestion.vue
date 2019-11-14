<template>
  <div class="question">
    <div class="category">
      <p class="message">
        {{ questionType.name }}
      </p>
    </div>
    <div class="question-title">
      {{ question.question }}
    </div>
    <div class="timer">
      <TimerBar
        seconds="10"
        :status-stop="statusStopTimer"
        @finish="finishQuestion"
      /> 
    </div>
    <div class="answers">
      <div
        v-if="answered && !correct"
        class="message failed"
      />
      <div
        v-if="answered && correct"
        class="message right"
      />

      <div
        v-for="(item,index) in answers"
        :key="index"
      >
        <button
          class="answer-button"
          :class="getClassAnswered(item.id)"
          @click="sendAnswer(item.id)"
        >
          {{ item.text }}
        </button>
      </div>
    </div>
  </div>
</template>
<script src="./ModalQuestion.js"></script>
<style lang="scss" scoped>
  @import "./ModalQuestion.scss";
</style>
