/*jshint esversion:6*/
// 1: 选中  2：未选中  3: 删除
import { ADD_TAG, TOGGLE_TAG, DELETE_TAG, ACTIVE_TAG, TAG_SEARCH } from '../constant/status';

const initialState = [
  {tag: TAG_SEARCH, selected: false},
  {tag: '历史', selected: true},
  {tag: '政治', selected: true},
  {tag: '科技', selected: true},
  {tag: '心理学', selected: true},
  {tag: '文学', selected: true},
  {tag: '励志', selected: true},
  {tag: '理财', selected: true},
  {tag: '互联网', selected: true},
  {tag: '职场', selected: true},
  {tag: '淘宝', selected: false},
  {tag: '微信', selected: false}
];

export default function tags(state = initialState, action){
  switch(action.type){
    case ADD_TAG:
      return [
        ...state,
        {
          tag: action.tag,
          selected: false
        }
      ];
    case DELETE_TAG:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case TOGGLE_TAG:
      return [
        ...state.slice(0, action.index),
        {
          tag: state[action.index].tag,
          selected: !state[action.index].selected
        },
        ...state.slice(action.index + 1)
      ];
    case ACTIVE_TAG:
      return [
        ...state.slice(0, action.index),
        {
          tag: state[action.index].tag,
          selected: true
        },
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}
