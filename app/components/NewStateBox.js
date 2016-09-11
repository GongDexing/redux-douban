/*jshint esversion:6*/
import '../less/NewStateBox.less';
import React, { Component } from 'react';
import { Input, Button, Icon } from 'antd';
export default class NewStateBox extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='state-box clearfix'>
        <Input type="textarea" rows={4} autosize={{minRows:4, maxRows:4}}  placeholder='今天你动态了吗，不要超过140个字'/>
        <ul className='insert-state'>
          <li className='pull-left'>插入：</li>
          <li className='pull-left'><Icon type="meh" />表情</li>
          <li className='pull-left'><Icon type="picture" />图片</li>
          <li className='pull-left'><Icon type="book" />书名</li>
          <li className='pull-right'>
            <Button type='primary'size="small"><span>动一下</span></Button>
          </li>
        </ul>
      </div>
    );
  }
}
