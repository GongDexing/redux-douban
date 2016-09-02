/*jshint esversion:6*/
export default function fetch(state = false, action){
  switch (action.type) {
    case 'START_FETCH':
      return true;
    case 'END_FETCH':
      return false;
    default:
      return state;
  }
}
