/*jshint esversion:6*/
export function navigateTo(route){
  return {
    type: 'NAVIGATE_TO',
    route
  };
}
