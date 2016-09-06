/*jshint esversion:6*/
import '../less/BooksContainer.less';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'antd';
import TagTabs from '../components/TagTabs';
import Books from '../components/Books';
import Tags from '../components/Tags';
import { fetchBooks } from '../actions/books';

class BooksContainer extends Component{
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
            <Books fetch={fetch} books={books} dispatch={dispatch}/>
          </Col>
          <Col span={6}>
            <Tags tags={tags} dispatch={dispatch}/>
          </Col>
        </Row>
      </div>
    );
  }
}
function filterActiveTags(tags){
  let activeTags = [];
  for(let i = 0; i < tags.length; i++){
    if(tags[i].isActive){
      activeTags.push(tags[i].tag);
    }
  }
  return activeTags;
}
function mapStateToProps(state){
  const { tags, tab, books, fetch } = state;
  const { total, items } = books;
  const activeTags = filterActiveTags(tags);
  return {
    tags,
    activeTags,
    tab: activeTags.indexOf(tab.tag) === -1 ? activeTags[0] : tab.tag,
    books: items,
    fetch,
    isComplete: total === items.length && total > 0
  };
}
export default connect(mapStateToProps)(BooksContainer);
