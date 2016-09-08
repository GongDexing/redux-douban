/*jshint esversion:6*/
import React, { Component } from 'react';
import { Card, Button } from 'antd';
import Answeor from './Answeor';
import NewAnsweor from './NewAnsweor';

export default class UserList extends Component{
  constructor(props){
    super(props);
    this.becomeAnsweor = this.becomeAnsweor.bind(this);
    this.state = {
      visible: false
    };
  }
  becomeAnsweor(){
    this.setState({
      visible: true
    });
  }
  render(){
    return(
      <div className='right-side'>
        <Card title="该书的答主(2位)"
          extra={
            <Button onClick={this.becomeAnsweor} icon="user" size="small"><span>成为答主</span></Button>
          }>
          <Answeor />
          <Answeor />
        </Card>
        <NewAnsweor visible={this.state.visible}/>
      </div>
    );
  }
}
