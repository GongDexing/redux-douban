/*jshint esversion:6*/
import { ADD_TAG, TOGGLE_TAG, DELETE_TAG, ACTIVE_TAG } from '../constant/status';

export function addTag(tag, query){
  return {
    type: ADD_TAG,
    tag
  };
}

export function deleteTag(index){
  return {
    type: DELETE_TAG,
    index
  };
}

export function toggleTag(index){
  return {
    type: TOGGLE_TAG,
    index
  };
}

export function activeTag(index){
  return {
    type: ACTIVE_TAG,
    index
  };
}
