<template>
<!-- <div class="home">
  <Board :content="boardContent"></Board>
</div> -->

  <div class="homeScreen" >
    <div class="homeScreenTitle">
      <!-- <img src="https://cosmic-s3.imgix.net/7429d6c0-af9f-11e8-87c1-f3000e5917ae-homeScreenTitleImage.png" > -->
    </div>

    <div class="homeScreenOptions">
      
      <div class="homeScreenOption" @click="changeView('play')">
          Play Game
      </div>

      <div class="homeScreenOption" @click="changeView('howToPlay')">
          How To Play
      </div>


      <Board ></Board>

    </div>
  </div>
</template>
<script src="./Home.js"></script>
<style lang="scss" scoped>
  @import "./Home.scss";
</style>
