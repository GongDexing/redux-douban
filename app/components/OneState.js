/*jshint esversion:6*/
import '../less/OneState.less';
import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import Comment from './Comment';


export default class OneState extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className='answeor-content'>
        <img className='anweor-img' src='https://img1.doubanio.com/lpic/s27003278.jpg' />
        <div className='clearfix anweor-detail'>
          <div className='clearfix'>
            <ul>
              <li className='answeor-name'>大王叫我来巡山</li>
            </ul>
          </div>
          <p>在北京天安门，看升旗，happy!!!!</p>
          <div>
            <img className='state-img' src='https://img1.doubanio.com/lpic/s27003278.jpg' />
            <img className='state-img' src='https://img1.doubanio.com/lpic/s27003278.jpg' />
          </div>
          <div className='state-operate'>
            <Icon type="like"/><span>100</span>&nbsp;&nbsp;
            <Icon type="dislike"/><span>10</span>&nbsp;&nbsp;
            <Icon type="message"/><span className='state-icon'>90</span>
          </div>
        </div>
      </div>
    );
  }
}
