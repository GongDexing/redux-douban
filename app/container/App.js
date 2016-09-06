/*jshint esversion:6*/
import 'antd/dist/antd.less';
import '../less/App.less';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import Wizard from '../components/Wizard';
import BooksContainer from './BooksContainer';
import BookContainer from './BookContainer';

class App extends Component{
  constructor(props){
    super(props);
    this.renderContainer = this.renderContainer.bind(this);
  }

  renderContainer(){
    const { route } = this.props;
    const matchArr = route.match(/^#\/books\/(\d+)$/);
    console.log('route', route);
    console.log('matchArr', matchArr);
    if(matchArr){
      return (<BookContainer id={matchArr[1]}/>);
    }else{
      return (<BooksContainer />);
    }
  }

  render(){
    const { tab, wizardTags, dispatch } = this.props;
    return (
      <div className='page-wrapper'>
        <Wizard tags={wizardTags} dispatch={dispatch}/>
        <NavBar dispatch={dispatch} tab={tab}/>
        {this.renderContainer()}
      </div>
    );
  }
}

function mapStateToProps(state){
  const { route, tab, wizard } = state;
  return {
    tab: tab.tag,
    wizardTags: wizard,
    route
  };
}
export default connect(mapStateToProps)(App);
