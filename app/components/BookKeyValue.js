/*jshint esversion:6*/
import React, { Component } from 'react';

export default class BookKeyValue extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const { name, value } = this.props;
    if(value && value !== ''){
      return (
        <p>
          <span className='book-key'>{name}</span>：
          <span className='book-value'>{value}</span>
        </p>
      );
    }else{
      return (
        <p/>
      );
    }

  }
}
