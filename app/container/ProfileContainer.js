/*jshint esversion:6*/
import React, { Component } from 'react';
import Profile from '../components/Profile';

export default class ProfileContainer extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <Profile />
    );
  }
}
