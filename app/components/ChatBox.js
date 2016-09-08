/*jshint esversion:6*/
import '../less/ChatBox.less';
import React, { Component } from 'react';
import { Icon, Input, Button } from 'antd';
import Message from './Message';

const InputGroup = Input.Group;
export default class ChatBox extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='chat-box'>
        <div className='box-header'>
        <span className='header-title'>大王叫我来巡山</span>
        <span className='header-extra pull-right'>
          <Icon type="cross" color='grey'/>
        </span>
        </div>
        <div className='box-body'>
          <Message  dir={'right'}/>
          <Message />
          <Message  dir={'right'}/>
          <Message />
          <Message  dir={'right'}/>
          <Message />
        </div>
        <div className='box-footer'>
          <InputGroup>
            <Input size="large" placeholder='输入内容'/>
            <div className="ant-input-group-wrap">
              <Button type='primary' >发送</Button>
            </div>
          </InputGroup>
        </div>
      </div>
    );
  }
}
