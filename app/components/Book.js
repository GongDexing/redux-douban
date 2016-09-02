/*jshint esversion:6*/
import '../less/Book.less';
import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
export default class Books extends Component{
    constructor(props){
      super(props);
    }
    render(){
      const { book } = this.props;
      return (
        <Col span="4">
          <Card bodyStyle={{ padding: '8px'}}>
            <div>
              <img width="100%" height='220px' src={book.images.large}/>
            </div>
          </Card>
        </Col>
      );
    }
}
