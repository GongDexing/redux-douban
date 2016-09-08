/*jshint esversion:6*/
import '../less/NavBar.less';
import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'antd';
import { currentTab, currentQuery } from '../actions/tab';
import { TAG_SEARCH } from '../constant/status';
import { activeTag } from '../actions/tags';
import { initialBooks, fetchBooks } from '../actions/books';
import Login from './Login';
import Register from './Register';

export default class NavBar extends Component{
  constructor(props){
    super(props);
    this.keyDown = this.keyDown.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.state = {
      loginVisible: false,
      registerVisible: false
    };
  }
  componentWillReceiveProps(nextProps){
    if(this.state.loginVisible || this.state.registerVisible){
        this.setState({
          loginVisible: false,
          registerVisible: false
        });
    }
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
  login(){
    this.setState({
      loginVisible: true,
      registerVisible: false
    });
  }
  register(){
    this.setState({
      loginVisible: false,
      registerVisible: true
    });
  }
  render(){
    console.log('state', this.state);
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
            <div className='login-area'>
              <Button type="primary" onClick={this.login}>登录</Button>
              &nbsp;&nbsp;
              <Button type="ghost" onClick={this.register}>注册</Button>
            </div>
          </Col>
        </Row>
        <Login visible={this.state.loginVisible}/>
        <Register visible={this.state.registerVisible}/>
      </header>
    );
  }
}
