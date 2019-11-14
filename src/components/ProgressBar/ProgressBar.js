export default {
  name: 'dice',
 
  props: {
    score: Number,
    cell:Object
    
  },
  data() {
    return {
      tantoVisto:null
    };
  },
  watch: {
    score: function (value) {
      this.calcProgress();
    }
  },
  mounted() {
   
    this.calcProgress();
  },
  methods: {
    calcProgress(){
      this.tantoVisto=(this.score===0)? 0 :(this.score*100)/5;
    }
  }
 
};
