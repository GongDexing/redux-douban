/*jshint esversion:6*/
import '../../node_modules/bootstrap/scss/bootstrap.scss';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/Navbar';
import NavTabs from '../components/NavTabs';
import Content from '../components/Content';
import { fetchBooks } from '../actions/books';
import { CLICK_TAG, SELECT_TAG, UNSELECT_TAG, DELETE_TAG, TAG_SEARCH } from '../constant/status';

class App extends Component{
  constructor(props){
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.state = {
      sticky: false
    };
  }
  componentDidMount(){
    window.addEventListener('scroll', this.onScroll, false);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.onScroll, false);
  }
  onScroll(){
    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let s = (document.body.scrollTop || document.documentElement.scrollTop || 0);
    if(h + s >= document.body.offsetHeight * 0.9){
      const { dispatch,scroll} = this.props;
      if(!scroll){
        dispatch(fetchBooks());
      }
    }
    if(window.scrollY > 50){
      this.setState({sticky: true});
    }else{
      this.setState({sticky: false});
    }
  }
  render(){
    const { dispatch, tags, selectTags, tab, books, scroll, noResult } = this.props;
    return (
        <div className=''>
          <NavBar dispatch={dispatch} tab={tab}/>
          <NavTabs sticky={!!this.state.sticky} dispatch={dispatch} activeTab={tab} selectTags={selectTags}/>
          <Content tags={tags} dispatch={dispatch} books={books}
                  scroll={scroll} noResult={noResult} sticky={!!this.state.sticky}/>
        </div>
    );
  }
}

function filterSelect(tags){
  let selectTags = [];
  for(let i = 0; i < tags.length; i++){
    if(tags[i].selected){
      selectTags.push(tags[i].tag);
    }
  }
  return selectTags;
}

function mapStateToProps(state){
  const { tags, tab, books, scroll } = state;
  const { total, items } = books;
  const { tag, query } = tab;
  const selectTags = filterSelect(tags);
  return {
    tags : tags,
    selectTags : selectTags,
    tab : selectTags.indexOf(tag) !== -1 ? tag : selectTags[0],
    books: items,
    scroll: (scroll &&　(total !== items.length || total === 0)),
    noResult: total === 0 || (query === '' && tag === TAG_SEARCH)
  };

}
export default connect(mapStateToProps)(App);
