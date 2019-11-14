import axios from 'axios';
import Settings from '@/common/Settings';

import BOARD from '@/data/board.json';
import QUESTIONS from '@/data/questions.json';

const state = {
  status: {},
  cells:BOARD.cells,
  questionsTypes:BOARD.questions,
  questions:QUESTIONS,
  scores:{},
  tirando:false,
  position:1,
  activeOptions:[],
  TotalShows:0,
  TotalOk:0
  
};
const actions = {
  startResetGame({dispatch,commit},data){
    commit('startResetGame');
  },
  increaseValues({dispatch,commit},data){
    commit('increaseValues',data);
  },
  sendAnswer({dispatch,commit},data){
    let question=data.question;
    let isRight=data.correct;
    if(isRight) commit('updateQuestionsOK',question);      
  },
  getGuestionByIdType({dispatch,commit},id){
    console.log('questions',state.questions);

    let questions=state.questions.filter((data)=>{
      return data.catego==id && !data.finished;
    });
    var shuffledQuestions = questions.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
    return shuffledQuestions[0];
  },
  updateActiveOptions({dispatch,commit},datos){
    commit('updateActiveOptions',datos);
    return state.cells;
  },
  getCellType({dispatch,commit},datos){
    let tipoCasilla=state.cells.find((cell)=>{
      return cell.id==datos;
    });
    let tipoPreguntaCasilla=state.questionsTypes.find((question)=>{
      return question.id===tipoCasilla.type;
    });   
    return tipoPreguntaCasilla;
  },  
  getScores({dispatch,commit}){
    state.scores=state.questionsTypes;
    return state.scores;
  },
  updateTirando({dispatch,commit},datos){
    commit('updateTirando',datos);
  },
  updatePosition({dispatch,commit},position){
    commit('updatePosition',position);
  }
};

const getters = {
 
};

const mutations = {
  startResetGame(state,data){
    state.TotalShows=0;
    state.TotalOk=0;
    state.tirando=false;
  },
  increaseValues(state,data){
    state[data]++;
  },
  updateQuestionsOK(state,data){
    console.log('questions',state.questions);

    debugger;
    let tempScores=state.scores.map((item)=>{
      if(item.id===data.catego){
        item.score++
      }else{
        item.score=item.score;
      }
      return item;
      
    });
    state.scores=tempScores;

    this.dispatch('player/increaseValues','TotalOk');
  },
  updateActiveOptions(state,data){
    debugger;

    state.tirando=true;
    state.activeOptions=data;
    state.cells.map((cell)=>{
      cell.active=false
    });
    data.forEach((elemento) => {
        let casilla=state.cells.find((cell)=>{
          return cell.id==elemento;
        })
        if(casilla) casilla.active=true;
     });
    console.log(state.cells);
  },
  updateTirando(state,data){
    state.tirando=data;
  },
  updatePosition(state,data){
    state.position=data;
    state.cells.map((cell)=>{
      cell.active=false
    });
    state.tirando=false;
  }
  
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
