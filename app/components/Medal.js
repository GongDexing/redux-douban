/*jshint esversion:6*/
import '../less/Medal.less';
import React, { Component } from 'react';

export default class Medal extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const { name } = this.props;
    return (
      <div>
        <div className="ribbon-wrapper">
          <div className="ribbon">{name}</div>
        </div>
      </div>
    );
  }
}
