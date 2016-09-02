/*jshint esversion:6*/
import { TAG_GUESS, TAG_SEARCH } from '../constant/status';
const initialState = [
  {tag: TAG_SEARCH, isActive: false},
  {tag: TAG_GUESS, isActive: true}
];
export default function tags(state = initialState, action){
  switch(action.type){
    case 'ADD_TAGS':
      return [
        ...initialState,
        ...action.tags
      ]
    case 'ADD_TAG':
      return [...state, {
        tag: action.tag,
        isActive: false
      }];
    case 'TOGGLE_TAG':
      return [
        ...state.slice(0, action.index),
        {
          tag: state[action.index].tag,
          isActive: !state[action.index].isActive
        },
        ...state.slice(action.index + 1)
      ];
    case 'DELETE_TAG':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case 'ACTIVE_TAG':
      return [
        ...state.slice(0, action.index),
        {
          tag: state[action.index].tag,
          isActive: true
        },
        ...state.slice(action.index + 1)
      ];
    case 'UNACTIVE_TAG':
      return [
        ...state.slice(0, action.index),
        {
          tag: state[action.index].tag,
          isActive: false
        },
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}
