/*jshint esversion:6*/
import React, { Component } from 'react';
import { Rate } from 'antd';

export default class BookRate extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div>读者评价：<span className='book-title'>8.7</span><Rate /></div>
        <p>收藏人数：<span className='book-title'>804</span></p>
        <p>预定次数：<span className='book-title'>666</span></p>
        <p>浏览次数：<span className='book-title'>88,888</span></p>
      </div>
    );
  }
}
