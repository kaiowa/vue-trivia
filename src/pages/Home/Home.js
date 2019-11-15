import Board from '@/components/Board';

export default {
  metaInfo: {
    title: 'VueTrivia',
    titleTemplate: '%s',
    htmlAttrs: {
      lang: 'en',
      amp: true,
    },
  },
  name: 'home',
  components: {
    Board
  },
  methods: {
    changeView(alias){
      this.$router.push({ name: alias});
    }
  }
};
