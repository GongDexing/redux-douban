/*jshint esversion:6*/
import '../less/CommentBox.less';
import React, { Component } from 'react';
import { Button, Input, Rate } from 'antd';

export default class CommentBox extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='comment-box'>
        <div className='clearfix'>
          <ul>
            <li className='reader-name'>尼古拉斯.诸葛孔明</li>
            <li className='comment-rate'><Rate allowHalf={true}/></li>
            <li className='pull-right'>
              <Button type='primary'size="small"><span>发表</span></Button>
            </li>
          </ul>
        </div>
        <Input type="textarea" rows={4} autosize={{minRows:4, maxRows:4}}  placeholder='让更多读者了解你的想法，不要超过200个字'/>
      </div>
    );
  }
}
