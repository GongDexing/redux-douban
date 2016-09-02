/*jshint esversion:6*/
export function startFetch(){
  return {
    type: 'START_FETCH',
  };
}

export function endFetch(){
  return {
    type: 'END_FETCH',
  };
}
