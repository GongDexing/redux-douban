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
        <div className='clearfix'>
          <ul>
            <li className='pull-left'>
              <img width='30px' src="../app/img/时间管理.jpg" />
            </li>
            <li className='answeor-name'>大王叫我来巡山(在线)</li>
            <li className='pull-right'>
              <Button icon="info-circle" size="small"><span>向Ta咨询</span></Button>
            </li>
          </ul>
        </div>
        <p>这本书我真的很懂，不信你试试，没有我不知道的，不然自罚三杯</p>
      </div>
    );
  }
}
