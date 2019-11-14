import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import player from './modules/player.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    player
  },
  plugins: [createPersistedState({
    paths:['player'],
  }),],
});
