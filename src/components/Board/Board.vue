<template>
<div class="board">
    <!-- <div v-for="(item,index) in content" :key="index" >
      <Cell :cellType="item.type"></Cell>
    </div> -->


<div class="table">
	<div class="boardtable" v-if="casillas">


		<div class="player" id="player" ref="player"></div>

		<div class="center">
			<div class="player-stats">
				<p class="total">Total:{{TotalShows}}</p>
				<p class="total">Aciertos:{{TotalOk}}</p>
				<!-- <Button ButtonText="Jugar"></Button> -->
				<Button ButtonText="opciones"></Button>
			</div>
			<div class="community-chest-deck">
				<div class="deck">
					<Dice @tirada="FinishDice"></Dice>
				</div>
			</div>
			<h1 class="title"></h1>
			<div class="chance-deck">
				<ScoreBoard :scores="cScores"></ScoreBoard>
			</div>
		</div>

		<!-- <div class="space corner go">
			<div class="container">
				<div class="instructions">Collect $200.00 salary as you pass</div>
				<div class="go-word">go</div>
			</div>
			<div class="arrow fa fa-long-arrow-left"></div>
		</div> -->

	<div class="row horizontal-row top-row">
			<Cell :cellNumber="1" :cell="casillas[0]" @position="updatePosition"></Cell>
			<Cell :cellNumber="2" :cell="casillas[1]" @position="updatePosition"></Cell>
			<Cell :cellNumber="3" :cell="casillas[2]" @position="updatePosition"></Cell>
			<Cell :cellNumber="4" :cell="casillas[3]" @position="updatePosition"></Cell>
			<Cell :cellNumber="5" :cell="casillas[4]" @position="updatePosition"></Cell>
			<Cell :cellNumber="6" :cell="casillas[5]" @position="updatePosition"></Cell>
			<Cell :cellNumber="7" :cell="casillas[6]" @position="updatePosition"></Cell>
			<Cell :cellNumber="8" :cell="casillas[7]" @position="updatePosition"></Cell>
		</div>

		<div class="row vertical-row right-row">
			<Cell :cellNumber="9" :cell="casillas[8]" className="community-chest" @position="updatePosition"></Cell>
			<Cell :cellNumber="10" :cell="casillas[9]" className="community-chest" @position="updatePosition"></Cell>
			<Cell :cellNumber="11" :cell="casillas[10]" className="community-chest" @position="updatePosition"></Cell>
		</div>

		<div class="row horizontal-row bottom-row">
			<Cell :cellNumber="19" :cell="casillas[18]" @position="updatePosition"></Cell>
			<Cell :cellNumber="18" :cell="casillas[17]" @position="updatePosition"></Cell>
			<Cell :cellNumber="17" :cell="casillas[16]" @position="updatePosition"></Cell>
			<Cell :cellNumber="16" :cell="casillas[15]" @position="updatePosition"></Cell>
			<Cell :cellNumber="15" :cell="casillas[14]" @position="updatePosition"></Cell>
			<Cell :cellNumber="14" :cell="casillas[13]" @position="updatePosition"></Cell>
			<Cell :cellNumber="13" :cell="casillas[12]" @position="updatePosition"></Cell>
			<Cell :cellNumber="12" :cell="casillas[11]" @position="updatePosition"></Cell>
		</div>

		<div class="row vertical-row left-row">
				<Cell :cellNumber="22" :cell="casillas[21]" className="community-chest" @position="updatePosition"></Cell>
				<Cell :cellNumber="21" :cell="casillas[20]" className="community-chest" @position="updatePosition"></Cell>
				<Cell :cellNumber="20" :cell="casillas[19]" className="community-chest" @position="updatePosition"></Cell>
		</div>

	</div>
	 
</div>

<button @click="Posicionar()">posicionar</button>
  <p style="color:#fff">{{casillas}}</p>
</div>

</template>
<script src="./Board.js"></script>
<style lang="scss">
  @import "./Board.scss";
</style>
