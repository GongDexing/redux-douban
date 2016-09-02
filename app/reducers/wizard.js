/*jshint esversion:6*/
import { WIZARD_TAGS } from '../constant/status';
export default function wizard(state = WIZARD_TAGS, action){
  switch(action.type){
    case 'WIZARD_TOGGLE_TAG':
      return [
        ...state.slice(0, action.index),
        {
          tag: state[action.index].tag,
          isActive: !state[action.index].isActive,
        },
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}
