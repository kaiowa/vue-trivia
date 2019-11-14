<template>
  <div
    v-if="cell"
    :class="getClassName()"
    @click="clickPosition()"
  >
    <div class="container">
      <div class="name">
        <!-- {{cellNumber}} -->
        <!-- {{tipoCasilla.name}} -->
        <!-- {{cell.active}} -->
      </div>
    </div>
  </div>
</template>
<script src="./Cell.js"></script>
<style lang="scss" scoped>
  @import "./Cell.scss";
</style>
