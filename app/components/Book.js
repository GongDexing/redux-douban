/*jshint esversion:6*/
import '../less/Book.less';
import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import Medal from './Medal';

export default class Books extends Component{
    constructor(props){
      super(props);
    }
    render(){
      const { book, click } = this.props;
      console.log('book', book);
      const url = `#/books/${book.id}`;
      return (
        <Col md={{span:4}} sm={{span: 8}} xs={{span:12}}>
          <Card bodyStyle={{ padding: '0px', height: '240px'}}>
            <div>
              <a href={url} onClick={() => click(url)}>
                <img width="100%" height='240px' src={book.images.large}/>
              </a>
              <Medal name='馆 藏' />
            </div>
          </Card>
        </Col>
      );
    }
}
