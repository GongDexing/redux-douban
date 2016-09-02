/*jshint esversion:6*/
import fetchJsonp from 'fetch-jsonp';
import { startFetch, endFetch } from '../actions/fetch';

export function fetchBooks(){
  return (dispatch, getState) => {
    const { books, tab, tags } = getState();
    const { nextStart, count } = books;
    const { tag, query, isQuery } = tab;
    if(!isQuery || query !== ''){
      const search = isQuery ? query : tag;
      const method = isQuery ? 'q' : 'tag';
      dispatch(startFetch());
      console.log(`https://api.douban.com/v2/book/search?${method}=${search}&count=${count}&start=${nextStart}`);
      fetchJsonp(`https://api.douban.com/v2/book/search?${method}=${search}&count=${count}&start=${nextStart}`)
        .then(res => res.json())
        .then(json => dispatch(addBooks(json)))
        .catch((e) => {})
        .then(() => dispatch(endFetch()));  //作为finally，无论前面是抛出异常都会执行
    }
  };
}
export function addBooks(json){
  return {
    type: 'ADD_BOOKS',
    json
  };
}
export function initialBooks(){
  return {
    type: 'INITIAL_BOOKS'
  };
}
