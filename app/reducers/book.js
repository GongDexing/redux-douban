/*jshint esversion:6*/
export default function book(state = {}, action){
  switch (action.type) {
    case 'CURRENT_BOOK':
      return action.book;
    default:
      return state;
  }
}
