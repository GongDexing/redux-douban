/*jshint esversion:6*/
import React, { Component } from 'react';
import { Card, Button } from 'antd';
import Answeor from './Answeor';

export default class UserList extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='right-side'>
        <Card title="该书的答主(2位)" extra={<Button icon="user" size="small"><span>成为答主</span></Button>}>
          <Answeor />
          <Answeor />
        </Card>
      </div>
    );
  }
}
