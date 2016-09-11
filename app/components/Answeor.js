/*jshint esversion:6*/
import '../less/Answeor.less';
import React, { Component } from 'react';
import { Button } from 'antd';

export default class Answeor extends Component{
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
              <li className='answeor-name'>大王叫我来巡山(在线)</li>
              <li className='pull-right'>
                <Button icon="info-circle" size="small"><span>向Ta咨询</span></Button>
              </li>
            </ul>
          </div>
          <p>这本书我真的很懂，机哈哈哈大大的试d大大的大大7777大大的打打分的大大大大大大大大大大方方</p>
        </div>
      </div>
    );
  }
}
