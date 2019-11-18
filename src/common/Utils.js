
export function param2Obj(url) {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
}
export function getPosition(pos){
  let position={
    'top':0,
    'left':0
  };
  console.log('posicion para ',pos);
  switch(pos){
  case 1:case 2:case 3: case 4:case 5:case 6: case 7: case 8:
    position.top=0;
    position.left=(120*(pos-1)+(2*pos)<0) ? -10  :120*(pos-1)+(1*pos) ;
    
    break;
  case 24: case 9:
    position.top=115;
    position.left=(pos===24) ?-10 :855;
    break;
  
  case 23: case 10:
    position.top=215;
    position.left=(pos===23) ?-10 :855;
    break;
    
  case 22: case 11:
    position.top=320;
    position.left=(pos===22) ? -10 :855;
    break;
  case 21: case 12:
    position.top=420;
    position.left=(pos===21) ? -10 :855;
    break;
  case 13:case 14:case 15:case 16: case 17:case 18:case 19: case 20:
    position.top=535;
    let tempPos=20-pos;
    position.left=(tempPos*120)+(2*tempPos)<=0 ? -10  : ((tempPos*120)+(2*tempPos))-(10-tempPos) ;
    
    console.log('position:'+pos+'-----'+tempPos+'====>'+position.left);
    
    break;
  }

  return position;
}
export function listenQuestion(textListen){
  return new Promise((resolve) => {
    let synth = window.speechSynthesis;
    let utterThis = new SpeechSynthesisUtterance(textListen);
    utterThis.pitch = 3;
    utterThis.rate = -6;
    synth.speak(utterThis);
    utterThis.addEventListener('end',()=> {
      console.log('terminado');
      resolve('terminadooo');
    });

  });

}