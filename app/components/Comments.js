/*jshint esversion:6*/
import '../less/Comments.less';
import React, { Component } from 'react';
import { Card, Button } from 'antd';
import Comment from './Comment';
import CommentBox from './CommentBox';
export default class Comments extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className='components-content'>
        <Card title="书评(4条)">
          <CommentBox />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </Card>
      </div>
    );
  }
}
