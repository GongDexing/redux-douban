/*jshint esversion:6*/
import { TAG_SEARCH } from '../constant/status';
const initialState = {
    tag: '',
    query: '',
    isQuery: false
};
export default function tab(state = initialState, action){
  switch(action.type){
    case 'CURRENT_TAB':
      return Object.assign({}, state, {
        tag: action.tag,
        isQuery: action.tag === TAG_SEARCH
      });
    case 'CURRENT_QUERY':
      return Object.assign({}, state, {
        query: action.query,
        isQuery: true
      });
    default:
      return state;
  }
}
