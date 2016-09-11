/*jshint esversion:6*/
import React, { Component } from 'react';
import { Button, Rate } from 'antd';
import '../less/BookComment.less';

export default class BookComment extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className='book-comment'>
        <p>一般般，差评，建议大家都不要看，印刷的质量也不高，很多错别字一般般，差评，建议大家都不要看，印刷的质量也不高，很多错别字一般般，差评，建议大家都不要看，印刷的质量也不高，很多错别字</p>
        <div className='clearfix'>
          <ul>
            <li className='reader-name'><a href='#'>《java编程思想》</a></li>
            <li className='reply-time'>两天前</li>
            <li className='comment-rate'>
              <Rate disabled defaultValue={4.5} allowHalf={true} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
