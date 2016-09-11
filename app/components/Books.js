/*jshint esversion:6*/
import '../less/Books.less';
import React, { Component } from 'react';
import { Row } from 'antd';
import Book from './Book';
import Spinner from './Spinner';
import NoResult from './NoResult';
import { navigateTo } from '../actions/route';

export default class Books extends Component{
  constructor(props){
    super(props);
    this.click = this.click.bind(this);
  }
  click(url){
    const { dispatch } = this.props;
    dispatch(navigateTo(url));
  }
  render(){
    const { fetch, books } = this.props;
    return(
        <div className='books'>
          <Row>
            {books.map((book, index) => <Book  key={index} book={book} click={this.click}/>)}
            <Spinner status={fetch}/>
            {books.length === 0 && !fetch ? <NoResult /> : ''}
          </Row>
        </div>
    );
  }
}
