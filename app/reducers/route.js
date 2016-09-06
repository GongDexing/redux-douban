/*jshint esversion:6*/
const initialState = window.location.hash;
export default function route(state = initialState, action){
  switch (action.type) {
    case 'NAVIGATE_TO':
      return action.route;
    default:
      return state;
  }
}
