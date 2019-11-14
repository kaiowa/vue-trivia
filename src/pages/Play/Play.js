import Board from '@/components/Board';

export default {
  metaInfo: {
    title: 'HOme ddd',
    titleTemplate: '%s',
    htmlAttrs: {
      lang: 'en',
      amp: true,
    },
  },
  name: 'play',
  components: {
    Board
  },
  data() {
    return {
      boardContent:{}
    };
  },
  created(){

    console.log('created home');
    this.boardContent=[
      {
        "id":1,
        "type":1
      },
      {
        "id":2,
        "type":3
      }
      ,{
      "id":3,
      "type":1
      }
      ,{
      "id":4,
      "type":3
      }
      ,{
      "id":5,
      "type":2
      },{
      "id":6,
      "type":2
      }
  ];

  },
  mounted() {
   
   console.log('mounted home');
  }
 
};
