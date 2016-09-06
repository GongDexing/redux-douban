/*jshint esversion:6*/
import { combineReducers } from 'redux';
import tags from './tags';
import tab from './tab';
import fetch from './fetch';
import books from './books';
import wizard from './wizard';
import route from './route';
import book from './book';
const rootReducer = combineReducers({
  tab,
  tags,
  fetch,
  books,
  wizard,
  route,
  book
});
export default rootReducer;
