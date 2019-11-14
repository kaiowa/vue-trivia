export default {
  name: 'timerbar',
 
  props: {
    seconds:String,
    statusStop:Boolean
  },
  data() {
    return {
      totalTime:null,
      timerDown:null,
      progress:100
    };
  },
  computed:{
    getProgress(){
      return this.progress;
    },
  },
  watch: {
    statusStop: function (value) {
      if(value===true)  clearInterval(this.timerDown);
    }
  },
  mounted() {
    this.timeTimer=parseInt(this.seconds)*1000;
    this.totalTime=parseInt(this.seconds)*1000;
    this.timerDown=setInterval(this.downTimer,100);
  },
  methods: {
    downTimer(){
      if(this.timeTimer<=0){
        clearInterval(this.timerDown);
        this.$emit('finish');
      }else{
        this.timeTimer=this.timeTimer-100;
        this.progress=Math.ceil((this.timeTimer*100)/this.totalTime);
      }
    }
  }
 
};
