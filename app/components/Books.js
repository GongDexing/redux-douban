/*jshint esversion:6*/
import React, { Component } from 'react';
import Book from './Book';
import Spinner from '../components/Spinner';
import NoResult from './NoResult';
export default class Books extends Component{
  constructor(props){
    super(props);
  }
  renderBooks(){
    const { books, scroll, noResult } = this.props;
    if( !scroll && noResult){
      return (
        <NoResult />
      );
    }else{
      return books.map((book, index) =>
        <Book key={index} book={book} />
      );
    }
  }
  render(){
    const { scroll } = this.props;
    return(
      <div className='col-md-9 '>
        {this.renderBooks()}
        <Spinner status={scroll}/>
      </div>
    );
  }
}
