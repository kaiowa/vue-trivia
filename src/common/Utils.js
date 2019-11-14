
export function param2Obj(url) {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
}
export function getPosition(pos){
  let position={
    "top":0,
    "left":0
  }
  console.log('posicion para ',pos);
  switch(pos){
    case 1:case 2:case 3: case 4:case 5:case 6: case 7: case 8:
      position.top=0;
      position.left=(120*(pos-1)<0) ? 0  :120*(pos-1) ;
      break;
    case 22: case 9:
      position.top=120;
      position.left=(pos===22) ?-20 :855;
      break;
    case 21: case 10:
      position.top=225;
      position.left=(pos===21) ?-20 :855;
      break;
    
    case 20: case 11:
      position.top=340;
      position.left=(pos===20) ? -20 :855;
      break;
    case 12:case 13:case 14:case 15: case 16:case 17:case 18: case 19:
      position.top=455;
      let tempPos=19-pos;
      position.left=(122*(tempPos)<0) ? -20  :122*(tempPos) ;
      break;
  }

  return position;
}
export function listenQuestion(textListen){
  //What team debuted Pedro de la Rosa in Formula 1?
  let synth = window.speechSynthesis
  let utterThis = new SpeechSynthesisUtterance(textListen)
  utterThis.pitch = 3
  utterThis.rate = -6
  synth.speak(utterThis)

}