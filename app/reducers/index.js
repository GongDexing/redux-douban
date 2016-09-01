/*jshint esversion:6*/
import { combineReducers } from 'redux';
import tags from './tags';
import tab from './tab';
import books from './books';
import scroll from './scroll';
const rootReducer = combineReducers({
  tags,
  tab,
  books,
  scroll
});
export default rootReducer;
