/*jshint esversion:6*/
import 'antd/dist/antd.less';
import '../less/App.less';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import Content from '../components/Content';
import Wizard from '../components/Wizard';
class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { books, activeTags, tags, tab, fetch, isComplete, dispatch, wizardTags } = this.props;
    return (
      <div className='page-wrapper'>
        <Wizard tags={wizardTags} dispatch={dispatch}/>
        <NavBar dispatch={dispatch} tab={tab}/>
        <Content {...this.props}/>
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
  const { tags, tab, books, fetch, wizard } = state;
  const { total, items } = books;
  const activeTags = filterActiveTags(tags);
  return {
    tags,
    activeTags,
    tab: activeTags.indexOf(tab.tag) === -1 ? activeTags[0] : tab.tag,
    books: items,
    fetch,
    isComplete: total === items.length && total > 0,
    wizardTags: wizard
  };

}
export default connect(mapStateToProps)(App);
