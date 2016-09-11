/*jshint esversion:6*/
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ProfileInfo from './ProfileInfo';
import ProfileData from './ProfileData';
import ProfileState from './ProfileState';
export default class Profile extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Row>
        <Col span={4} offset={1}>
          <ProfileInfo />
        </Col>
        <Col span={11}>
          <ProfileData />
        </Col>
        <Col span={7}>
          <ProfileState />
        </Col>
      </Row>
    );
  }
}
