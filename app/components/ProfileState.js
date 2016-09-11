/*jshint esversion:6*/
import '../less/ProfileState.less';
import React, { Component } from 'react';
import { Card } from 'antd';
import OneState from './OneState';
import NewStateBox from './NewStateBox';
export default class ProfileState extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className='profile-state'>
        <Card title="动态">
          <NewStateBox />
          <div className='all-state'>
            <OneState />
            <OneState />
            <OneState />
            <OneState />
            <OneState />
            <OneState />
          </div>
        </Card>
      </div>
    );
  }
}
