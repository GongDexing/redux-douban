/*jshint esversion:6*/
import '../less/Message.less';
import React, { Component } from 'react';

export default class Message extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { dir } = this.props;
    const isRight = dir === 'right';
    return(
      <div className='chat-msg'>
        <div className='chat-info clearfix'>
          <span className={'chat-name '+(isRight?'pull-right':'pull-left')}>
            尼古拉斯.诸葛孔明
          </span>
          <span className={'chat-timestamp '+(isRight?'pull-left':'pull-right')}>2016-09-06 13:00</span>
        </div>
        <img className={'chat-img '+(isRight?'img-right':'')} src='https://img1.doubanio.com/lpic/s27003278.jpg' />
        <div className={'chat-text '+(isRight?'chat-text-right':'')}>
        最近怎么样，工作还顺利不，家庭还美满不，股票涨了没，家里两头猪喂饱了没，羊都放好了吧。
        </div>
      </div>
    );
  }
}
