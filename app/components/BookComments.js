/*jshint esversion:6*/
import React, { Component } from 'react';
import BookComment from './BookComment';

export default class BookComments extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <BookComment />
        <BookComment />
        <BookComment />
        <BookComment />
        <BookComment />
        <BookComment />
      </div>
    );
  }
}
