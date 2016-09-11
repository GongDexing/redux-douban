/*jshint esversion:6*/
import '../less/Comment.less';
import React, { Component } from 'react';
import { Button, Rate } from 'antd';

export default class Comment extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='answeor-content'>
        <div className='clearfix'>
          <ul>
            <li className='reader-name'>尼古拉斯.诸葛孔明</li>
            <li className='reply-time'>两天前</li>
            <li className='comment-rate'><Rate allowHalf={true}/></li>
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
