/*jshint esversion:6*/
export function currentTab(tag){
  return {
    type: 'CURRENT_TAB',
    tag
  };
}

export function currentQuery(query){
  return {
    type: 'CURRENT_QUERY',
    query
  };
}
