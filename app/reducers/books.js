/*jshint esversion:6*/
const initialState = {
  total: 0,
  nextStart: 0,
  count: 24,
  items: []
};
export default function books(state = initialState, action){
  switch (action.type) {
    case 'ADD_BOOKS':
      return Object.assign({}, state, {
        total: action.json.total,
        nextStart: action.json.start + action.json.count,
        count: 12,
        items: [
          ...state.items, ...action.json.books
        ]
      });
    case 'INITIAL_BOOKS':
      return initialState;
    default:
      return state;
  }
}
