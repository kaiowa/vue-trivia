<template>
  
    <div class="switch" @click="updateValue()">
      <input type="checkbox" :checked="isChecked" >
      <span class="slider round"></span>
    </div>
  
</template>
<script src="./Switch.js"></script>
<style lang="scss" scoped>
  @import "./Switch.scss";
</style>
