/*jshint esversion:6*/
import '../less/ProfileState.less';
import React, { Component } from 'react';
import { Card } from 'antd';
export default class ProfileState extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className='profile-state'>
        <Card title="动态">

        </Card>
      </div>
    );
  }
}
