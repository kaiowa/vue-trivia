import TimerBar from '@/components/TimerBar';
import {listenQuestion} from '@/common/Utils.js';
export default {
  name: 'dice',
  components:{
    TimerBar
  },
  props: {
    questionType:{
      type:Object
    },
    idCell:Number
  },
  data() {
    return {  
      question:{},
      answers:[],
      answered:false,
      correct:false,
      rightAnswer:0,
      statusStopTimer:false
    };
  },
  watch: {
    idCell: function (value) {
      this.correct=false;
      this.answered=false;
    },
    questionType:function(value){
      this.correct=false;
      this.answered=false;
    }
  },
  created(){
    
  },
  
  mounted() {
    this.answered=false;
    this.correct=false;
    this.$store.dispatch('player/getGuestionByIdType',this.questionType.id).then((question)=>{
      this.question=question;
      
      let textResponses='';
      this.answers = this.question.answers.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
      
      this.answers.forEach(element => {
          console.log(element);
          textResponses +=element.text+'                                  ';
      });
      listenQuestion(this.question.question).then(()=>{
     
      });
      this.rightAnswer=question.right;
      this.$store.dispatch('player/increaseValues','TotalShows');
    });
  },
  methods: {
    finishQuestion(){
      this.answered=true;
      this.correct=false;
      this.answers.map((item)=>{
        item.class=(item.id==this.rightAnswer) ? 'correct' : 'incorrect';
      });
      setTimeout(()=>{
        this.$emit('close');
      },2000)
    },
    getClassAnswered(id){
      return this.answers.find((data)=>{
        return data.id==id
      }).class;
    },
    sendAnswer(item){
      console.log('enviar ',item);
      this.answered=true;
      this.correct=(item===this.rightAnswer) ? true :false;
      this.answers.map((item)=>{
        item.class=(item.id==this.rightAnswer) ? 'correct' : 'incorrect';
      });
     
      let options={
        "question":this.question,
        "correct":this.correct
      }
      this.statusStopTimer=true;
      this.$store.dispatch('player/sendAnswer',options)
      setTimeout(()=>{
        this.$emit('close');
      },2000)
      
    }
  }
 
};
