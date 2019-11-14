<template>
  <div class="button">
    <Button
      class="btn"
      @click="clicked"
    >
      {{ ButtonText }}
    </Button>
  </div>
</template>
<script src="./Button.js"></script>
<style lang="scss" scoped>
  @import "./Button.scss";
</style>
