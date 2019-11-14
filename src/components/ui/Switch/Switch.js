export default {
  name: 'switchSlider',
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {  
     
    };
  },
  methods: {
    updateValue(){
      this.isChecked=!this.isChecked;
      this.$emit('udpate',this.isChecked);
    }
  }
};
