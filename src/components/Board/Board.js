import Cell from '@/components/Cell';
import Dice from '@/components/Dice';
import ScoreBoard from  '@/components/ScoreBoard';
import ModalQuestion from '@/components/ModalQuestion';
import ModalSettings from '@/components/ModalSettings';
import ModalFinishGame from '@/components/ModalFinishGame';
import TimerBar from '@/components/TimerBar';
import Button from '@/components/Button';
import SwitchSlider from '@/components/ui/Switch';

import anime from 'animejs/lib/anime.es.js';
import {getPosition} from '@/common/Utils.js';
import { mapState, } from 'vuex';
export default {
  name: 'board',
  components:{
    Cell,
    Dice,
    ScoreBoard,
    ModalQuestion,
    ModalSettings,
    ModalFinishGame,
    TimerBar,
    Button,
    SwitchSlider
  },
  props: {
    name: String,
  },
  data() {
    return {
      finishTirada:false,
      startGame:false,
      currentPosition:1,
      resultadoTirada:0,
      celdas:null,
      cScores:[]
    };
  },
  computed: {
    ...mapState({
      casillas:state => state.player.cells,
      TotalShows:state=>state.player.TotalShows,
      TotalOk:state => state.player.TotalOk,
      scores:state => state.player.scores,
      finished:state =>state.player.finishedGame
    }),
    
  },
  watch:{
    finished:function(value){
      if(value===true){
        setTimeout(()=>{
          this.$modal.show(ModalFinishGame);
        },3000);
      }
    },

    scores:function(value){
      console.log('cambio en scoresssss');
      this.cScores=value;
    }
  },
  created(){
    console.log('created board');
    this.$store.dispatch('player/getScores');
  },

  mounted() {
    this.$store.dispatch('player/startResetGame');
    this.cScores=this.scores;
    this.initialPosition();
  },
  methods: {
    initialPosition(){
      var self=this;
      let Min = 0;
  		let Max = 21;
      let  posi = Math.ceil(Min + (Math.random() * ((Max - Min) + 1)));
      // let posi=2;
      this.currentPosition=posi;
      this.position=getPosition(this.currentPosition);
      anime({
        targets: this.$refs.player,
        left: this.position.left,
        top:this.position.top,
        duration: 0,
        easing: 'easeInOutExpo',
        complete: function() {
          console.log('lanzar pregunta');
          if(self.startGame){
            self.openQuestion();
          }
        }
      });
      this.$store.dispatch('player/updatePosition',this.currentPosition);

    },
    updateActiveCells(data){
      
    },
    FinishDice(result){
      this.resultadoTirada=result;
      let activeOptions=[];
      let anterior,posterior;
 
      if(this.currentPosition>18){
        anterior=(this.currentPosition+this.resultadoTirada)>24 ? Math.abs(24-(this.currentPosition+this.resultadoTirada)) : this.currentPosition+this.resultadoTirada;
        posterior=this.currentPosition-this.resultadoTirada;
      }else{
        anterior=(this.currentPosition-this.resultadoTirada)<1 ? 24-(Math.abs(this.currentPosition-this.resultadoTirada)): this.currentPosition-this.resultadoTirada ;
        posterior=this.currentPosition+this.resultadoTirada;
      }
      console.log('anterior:'+anterior);
      console.log('posterior:'+posterior);
      activeOptions.push(anterior);
      activeOptions.push(posterior);
      this.$store.dispatch('player/updateActiveOptions',activeOptions).then((data)=>{
        console.log('data',data);
        this.startGame=true;
      });
    },
    updatePosition(celda){
      this.Posicionar(celda.id);
    },
    openQuestion(){
      this.$store.dispatch('player/getCellType',this.currentPosition).then((data)=>{
        console.log('tipo Pregunta',data);
        this.$modal.show(ModalQuestion,{questionType:data,idCell:this.currentPosition}, {draggable: false,clickToClose: false});
      });
      
    },
    openSettings(){
      debugger;
      this.$modal.show(ModalSettings);
   
    },
    generateKeyFrames(playerTop,playerLeft,positionTop,positionLeft){
      let mKeyframes=[];
      if(positionTop>=playerTop){
        if(playerTop>=65){
          mKeyframes=[
            {top:positionTop},
            {left:positionLeft}
          ];
        }else{
          mKeyframes=[
            {left:positionLeft},
            {top:positionTop},
          ];
        }
      }else{
        if(playerTop>=420 && positionLeft>=playerLeft){
          mKeyframes=[
            {left:positionLeft},
            {top:positionTop},
          ];
        }else{
          mKeyframes=[
            {top:positionTop},
            {left:positionLeft}
          ];
        }
      }
      return mKeyframes;
    },
    Posicionar(posicion){
      var self=this;
      let Min = 0;
  		let Max = 21;
      let  posi = Math.ceil(Min + (Math.random() * ((Max - Min) + 1)));
      this.currentPosition=(!posicion)? posi : posicion;
      this.position=getPosition(this.currentPosition);
      this.$store.dispatch('player/updatePosition',this.currentPosition);
      let playerTop=this.$refs.player.offsetTop;
      let playerLeft=this.$refs.player.offsetLeft;
      if(this.position.top!=playerTop){
        
        let mKeyframes=this.generateKeyFrames(playerTop,playerLeft,this.position.top,this.position.left);

        anime({
          targets: this.$refs.player,
          keyframes:mKeyframes,
          duration: 1000,
          easing: 'easeInOutExpo',
          complete: function() {
            console.log('lanzar pregunta');
            if(self.startGame){
              self.openQuestion();
            }
          }
        });

      }else{
     
        anime({
          targets: this.$refs.player,
          left: this.position.left,
          top:this.position.top,
          duration: 0,
          easing: 'easeInOutExpo',
          complete: function() {
            console.log('lanzar pregunta');
            if(self.startGame){
              self.openQuestion();
            }
          }
        });

      }
      
    }
  }
 
};
