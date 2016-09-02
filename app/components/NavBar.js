/*jshint esversion:6*/
import '../less/NavBar.less';
import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import { currentTab, currentQuery } from '../actions/tab';
import { TAG_SEARCH } from '../constant/status';
import { activeTag } from '../actions/tags';
import { initialBooks, fetchBooks } from '../actions/books';

export default class NavBar extends Component{
  constructor(props){
    super(props);
    this.keyDown = this.keyDown.bind(this);
  }

  keyDown(event){
    const { dispatch, tab } = this.props;
    if(event.keyCode === 13 ){
      const { value } = this.refs.query;
      if(value.replace(/\s+/g, '') === ''){
          return ;
      }
      dispatch(currentQuery(value));
      if(tab === TAG_SEARCH){
        dispatch(initialBooks());
        dispatch(fetchBooks());
      }else{
        dispatch(activeTag(0));
        dispatch(currentTab(TAG_SEARCH));
      }

    }
  }
  render(){
    return (
      <header id='header' className='clearfix'>
        <Row>
          <Col span={4}>
            <a id='logo'>
              <span>Redux Douban</span>
            </a>
          </Col>
          <Col span={20}>
            <div id='search-box'>
              <input ref='query' size='large' placeholder="尽情搜索..." className='no-border' onKeyDown={this.keyDown} />
            </div>
          </Col>
        </Row>
      </header>
    );
  }
}
