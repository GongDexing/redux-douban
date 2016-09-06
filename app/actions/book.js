/*jshint esversion:6*/
import fetchJsonp from 'fetch-jsonp';
import { startFetch, endFetch } from '../actions/fetch';
export function fetchBook(id){
  console.log(`https://api.douban.com/v2/book/${id}`);
  return (dispatch)=>{
    dispatch(startFetch());
    fetchJsonp(`https://api.douban.com/v2/book/${id}`)
      .then(res => res.json())
      .then(book => dispatch(currentBook(book)))
      .catch((e) => {})
      .then(() => dispatch(endFetch()));  //作为finally，无论前面是抛出异常都会执行
  };
}

function currentBook(book){
  return {
    type: 'CURRENT_BOOK',
    book
  };
}
