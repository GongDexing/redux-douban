/*jshint esversion:6*/
import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import { setTab } from '../actions/tab';
import { fetchBooks, initialBooks } from '../actions/books';
import { TAG_SEARCH } from '../constant/status';

export default class NavTabs extends Component{
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount(){
    const { dispatch, activeTab } = this.props;
    Promise.resolve()
      .then(() => dispatch(setTab(activeTab)))
      .then(() => dispatch(fetchBooks()));
  }
  componentWillReceiveProps(nextProps){
    const { activeTab } = nextProps;
    if(activeTab !== this.props.activeTab && activeTab !== ''){
      const { dispatch, activeTab } = nextProps;
      Promise.resolve()
        .then(() => dispatch(setTab(activeTab)))
        .then(() => dispatch(initialBooks()))
        .then(() => dispatch(fetchBooks()));
    }
  }
  onChange(value){
    console.log(value);
    const { dispatch } = this.props;
    dispatch(setTab(value));
  }
  render(){
    const { activeTab, selectTags, sticky } = this.props;
    return (
      <Tabs value={activeTab} onChange={this.onChange} className={sticky ? 'sticky' : ''}>
        {
          selectTags.map((tag, index) => {
            if(tag === TAG_SEARCH){
              return (<Tab index={index} key={index} label={tag} value={tag} className='search-inline'
                  icon={<FontIcon className="material-icons">search</FontIcon>}/>);
            }
            return (<Tab index={index} key={index} label={tag} className='search-inline' value={tag}/>);
          })
        }
      </Tabs>
    );
  }
}
