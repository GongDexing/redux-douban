/*jshint esversion:6*/
import '../less/ContactsBox.less';
import React, { Component } from 'react';
import { Icon, Input, Button, Badge } from 'antd';
import Contact from './Contact';
export default class ContactsBox extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className='contacts-box'>
        <div className='box-header'>
        <span className='header-title'>聊天</span>
        <span className='header-extra pull-right'>
          <Icon type="circle-o-down"/>
        </span>
        </div>
        <div className='contacts-box-body'>
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />                                                                                 
        </div>
      </div>
    );
  }
}
