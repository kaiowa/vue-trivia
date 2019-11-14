import { mapState, } from 'vuex';

export default {
  name: 'dice',
  props: {
    cellNumber: Number,
    className:String
  },
  computed: {
    ...mapState({
    tirando:state => state.player.tirando
    }),
  },
  data() {
    return {
      rotating:false,
      diceResult:1
    };
  },
  created(){
    console.log('dice cell');
  },
  methods: {
    getClassName(){
      return (this.className) ? 'space '+this.className : 'space';
    },
    getDiceResult(){
      return `dado dice${this.diceResult}` ;
    },
    getClassTirando(){
      return this.tirando===true ? 'disabled':'';
    },
    generateDice(){
     
        let Min = 0;
        let Max = 5;
        let  posi = Math.ceil(Min + (Math.random() * ((Max - Min) + 1)));
        this.diceResult=posi;
        this.$emit('tirada',this.diceResult);
        console.log('this.diceResult',this.diceResult);
     
    },
    launchDice(){
      if(!this.tirando){
        this.rotating=true;
        setTimeout(()=>{
          this.rotating=false;
          this.generateDice();

        },2000)
      }

    },
  }
 
};
