/*jshint esversion:6*/
import '../less/Books.less';
import React, { Component } from 'react';
import { Row } from 'antd';
import Book from './Book';
import Spinner from './Spinner';
import NoResult from './NoResult';

export default class Books extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { fetch, books } = this.props;
    return(
        <div>
          <Row>
            {books.map((book, index) => <Book key={index} book={book}/>)}
            <Spinner status={fetch}/>
            {books.length === 0 && !fetch ? <NoResult /> : ''}
          </Row>
        </div>
    );
  }
}
