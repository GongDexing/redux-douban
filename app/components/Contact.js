/*jshint esversion:6*/
import '../less/Contact.less';
import React, { Component } from 'react';
import { Badge } from 'antd';
export default class Contact extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='contact-box'>
        <img className='chat-img' src='https://img1.doubanio.com/lpic/s27003278.jpg' />
        <div>
          <div className='clearfix'>
            <span className='contact-name pull-left'>
              尼古拉斯.诸葛孔明
            </span>
            <span className='contact-time pull-right'>2天前</span>
          </div>
          <div className='contact-unread clearfix'>
            <span className='unread-text pull-left'>大河向东大大头图大爱大大大大大大流，你有我有全都有呀</span>
            <span className='pull-right'><Badge count={12}/></span>
          </div>
        </div>
      </div>
    );
  }
}
