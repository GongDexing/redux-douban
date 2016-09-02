/*jshint esversion:6*/
import { combineReducers } from 'redux';
import tags from './tags';
import tab from './tab';
import fetch from './fetch';
import books from './books';
import wizard from './wizard';
const rootReducer = combineReducers({
  tab,
  tags,
  fetch,
  books,
  wizard
});
export default rootReducer;
