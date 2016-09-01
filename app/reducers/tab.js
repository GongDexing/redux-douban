/*jshint esversion:6*/
const initialState = {
  tag: '',
  query: ''
};
export default function tab(state = initialState, action){
  switch(action.type){
    case 'SET_TAB':
      return Object.assign({}, state, {
        tag: action.tag
      });
    case 'SET_QUERY':
      return Object.assign({}, state, {
        query: action.query
      });
    default:
      return state;
  }
}
