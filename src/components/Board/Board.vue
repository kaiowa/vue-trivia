<template>
  <div class="board">

    <div class="table">
      <div
        v-if="casillas"
        class="boardtable"
      >
        <div
          id="player"
          ref="player"
          class="player"
        />

        <div class="center">
          <div class="player-stats">
            <p class="total">
              Total:{{ TotalShows }}
            </p>
            <p class="total">
              Aciertos:{{ TotalOk }}
            </p>
						<!-- <SwitchSlider></SwitchSlider>
						<br><br>
						<br> -->
						
            <!-- <Button ButtonText="Jugar"></Button> -->
            <!-- <Button button-text="Settings" @clicked="openSettings" /> -->
          </div>
          <div class="community-chest-deck">
            <div class="deck">
              <Dice @tirada="FinishDice" />
            </div>
          </div>
          <h1 class="title" />
          <div class="chance-deck">
            <ScoreBoard :scores="cScores" />
          </div>
        </div>

        <div class="row horizontal-row top-row">
          <Cell
            :cell-number="1"
            :cell="casillas[0]"
            @position="updatePosition"
          />
          <Cell
            :cell-number="2"
            :cell="casillas[1]"
            @position="updatePosition"
          />
          <Cell
            :cell-number="3"
            :cell="casillas[2]"
            @position="updatePosition"
          />
          <Cell
            :cell-number="4"
            :cell="casillas[3]"
            @position="updatePosition"
          />
          <Cell
            :cell-number="5"
            :cell="casillas[4]"
            @position="updatePosition"
          />
          <Cell
            :cell-number="6"
            :cell="casillas[5]"
            @position="updatePosition"
          />
          <Cell
            :cell-number="7"
            :cell="casillas[6]"
            @position="updatePosition"
          />
          <Cell
            :cell-number="8"
            :cell="casillas[7]"
            @position="updatePosition"
          />
        </div>

        <div class="row vertical-row right-row">
          <Cell
            :cell-number="9"
            :cell="casillas[8]"
            class-name="community-chest"
            @position="updatePosition"
          />
          <Cell
            :cell-number="10"
            :cell="casillas[9]"
            class-name="community-chest"
            @position="updatePosition"
          />
          <Cell
            :cell-number="11"
            :cell="casillas[10]"
            class-name="community-chest"
            @position="updatePosition"
          />
          
           <Cell
            :cell-number="12"
            :cell="casillas[11]"
            class-name="community-chest"
            @position="updatePosition"
          />
        </div>

        <div class="row horizontal-row bottom-row">
          <Cell
            :cell-number="20"
            :cell="casillas[19]"
            @position="updatePosition"
          />
          <Cell
            :cell-number="19"
            :cell="casillas[18]"
            @position="updatePosition"
          />
          <Cell
            :cell-number="18"
            :cell="casillas[17]"
            @position="updatePosition"
          />
          <Cell
            :cell-number="17"
            :cell="casillas[16]"
            @position="updatePosition"
          />
          <Cell
            :cell-number="16"
            :cell="casillas[15]"
            @position="updatePosition"
          />
          <Cell
            :cell-number="15"
            :cell="casillas[14]"
            @position="updatePosition"
          />
          <Cell
            :cell-number="14"
            :cell="casillas[13]"
            @position="updatePosition"
          />
          <Cell
            :cell-number="13"
            :cell="casillas[12]"
            @position="updatePosition"
          />
        </div>

        <div class="row vertical-row left-row">
          <Cell
            :cell-number="24"
            :cell="casillas[23]"
            class-name="community-chest"
            @position="updatePosition"
          />
          <Cell
            :cell-number="23"
            :cell="casillas[22]"
            class-name="community-chest"
            @position="updatePosition"
          />
          <Cell
            :cell-number="22"
            :cell="casillas[21]"
            class-name="community-chest"
            @position="updatePosition"
          />
          <Cell
            :cell-number="21"
            :cell="casillas[20]"
            class-name="community-chest"
            @position="updatePosition"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Board.js"></script>
<style lang="scss">
  @import "./Board.scss";
</style>
