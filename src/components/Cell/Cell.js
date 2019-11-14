export default {
  name: 'cell',
 
  props: {
    cellNumber: Number,
    className:String,
    cell:Object
  },
  data() {
    return {
      tipoCasilla:{}
    };
  },
  created(){
    this.$store.dispatch('player/getCellType',this.cellNumber).then((data)=>{
      this.tipoCasilla=data;
    });
  },
  mounted() {
  },
  methods: {
    getClassName(){
      let PreClass=(this.className) ? 'space '+this.className : 'space';
      if(this.tipoCasilla.clase){
        PreClass = PreClass + ' '+this.tipoCasilla.clase;
      }
      if(this.cell && this.cell.active){
        PreClass = PreClass+ ' active';
      }
      return PreClass;
    },
    clickPosition(){
      console.log('click en cell',this.cell);
      this.$emit('position',this.cell);
    }
  }
 
};
