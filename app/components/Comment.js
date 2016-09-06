/*jshint esversion:6*/
import '../less/Comment.less';
import React, { Component } from 'react';
import { Button } from 'antd';

export default class Comment extends Component{
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
            <li className='reader-name'>李四</li>
            <li className='reply-time'>2016-05-05 17:05</li>
            <li className='pull-right'>
              <Button size="small"><span>回复</span></Button>
            </li>
          </ul>
        </div>
        <p>一般般，差评，建议大家都不要看，印刷的质量也不高，很多错别字</p>
      </div>
    );
  }
}
