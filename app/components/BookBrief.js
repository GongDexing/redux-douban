/*jshint esversion:6*/
import React, { Component } from 'react';
import { Card } from 'antd';

export default class BookBrief extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const { text } = this.props;
    return(
      <Card bordered={false}>
        <h2>目录</h2>
        <br />
        <h3><pre>{text}</pre></h3>
      </Card>
    );
  }
}
