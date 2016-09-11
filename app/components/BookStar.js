/*jshint esversion:6*/
import '../less/BookStar.less';
import React, { Component } from 'react';
import { Col, Card, Icon } from 'antd';
import Medal from './Medal';
export default class BookStar extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Col md={{span:6}} sm={{span:12}} xs={{span:12}}>
        <Card bodyStyle={{ padding: '0px', height: '240px'}}>
          <div>
            <img  width="100%" height='240px' src="https://img1.doubanio.com/lpic/s22783787.jpg" />
          </div>
          <div className="overlay-card">
            <p><Icon type="star-o" /> 3天前 收藏</p>
          </div>
          <Medal name='馆 藏' />
        </Card>
      </Col>
    );
  }
}
