/*jshint esversion:6*/
import '../less/Content.less';
import React, { Component } from 'react';
import { Col, Row } from 'antd';
import TagTabs from './TagTabs';
import Books from './Books';
import Tags from './Tags';
import { fetchBooks } from '../actions/books';

export default class Content extends Component{
  constructor(props){
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.state = {
      sticky : false
    };
  }
  componentDidMount(){
    window.addEventListener('scroll', this.onScroll, false);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.onScroll, false);
  }
  onScroll(){
    const viewArea = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const scrolly = (document.body.scrollTop || document.documentElement.scrollTop || 0);
    const fullPage = Math.max(document.body.scrollHeight, document.body.offsetHeight);
    if(viewArea + scrolly > fullPage * 0.9 ){
      const { dispatch, fetch, isComplete} = this.props;
      console.log('viewArea', viewArea);
      console.log('scrolly', scrolly);
      console.log('fullPage', fullPage);
      if(!fetch && !isComplete){
        dispatch(fetchBooks());
      }
    }
    if(window.scrollY > 60){
      this.setState({sticky: true});
    }else{
      this.setState({sticky: false});
    }
  }
  render(){
    const { fetch, books, tab, activeTags, tags, dispatch } = this.props;
    return(
      <div className={this.state.sticky ? 'sticky' : '' }>
        <TagTabs tab={tab} activeTags={activeTags} dispatch={dispatch}/>
        <Row>
          <Col span={18}>
            <Books fetch={fetch} books={books}/>
          </Col>
          <Col span={6}>
            <Tags tags={tags} dispatch={dispatch}/>
          </Col>
        </Row>
      </div>
    );
  }
}
