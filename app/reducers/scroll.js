/*jshint esversion:6*/
export default function scroll(state = false, action){
  switch(action.type){
    case 'SCROLL_STATUS':
      return action.status;
    default:
      return state;
  }
}
