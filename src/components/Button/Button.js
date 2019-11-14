export default {
  name: 'Btn',
  components:{
  },
  props:{
    ButtonText:String
  },
  methods: {
    clicked(e){
      this.$emit('clicked',e);
    }
    
  }
 
};
