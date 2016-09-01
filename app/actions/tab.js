/*jshint esversion:6*/
export function setTab(tag){
  return {
    type: 'SET_TAB',
    tag
  };
}

export function setQuery(query){
  return {
    type: 'SET_QUERY',
    query
  };
}
