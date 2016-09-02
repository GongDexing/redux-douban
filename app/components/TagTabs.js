/*jshint esversion:6*/
import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import { currentTab } from '../actions/tab';
import { initialBooks, fetchBooks } from '../actions/books';
import { TAG_GUESS, TAG_SEARCH } from '../constant/status';

const TabPane = Tabs.TabPane;

export default class TagTabs extends Component{
  constructor(props){
    super(props);
    this.tabClick = this.tabClick.bind(this);
  }
  tabClick(tab){
    const { dispatch } = this.props;
    dispatch(currentTab(tab));
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.tab !== this.props.tab){
      const { dispatch, tab } = nextProps;
      dispatch(currentTab(tab));
      dispatch(initialBooks());
      dispatch(fetchBooks());
    }
  }
  componentDidMount(){
    const { dispatch, tab } = this.props;
    dispatch(currentTab(tab));
    dispatch(fetchBooks());
  }
  render(){
    const { tab, activeTags } = this.props;
    return(
      <Tabs activeKey={tab} onTabClick={this.tabClick} defaultActiveKey={activeTags[0]}>
        {
          activeTags.map((tag, index) =>
              <TabPane tab={
                tag === TAG_SEARCH ? (<span><Icon type="search"/>{tag}</span>) :
                  (tag === TAG_GUESS ? (<span><Icon type="heart-o"/>{tag}</span>) :
                    tag)
              } key={tag} />
          )
        }
      </Tabs>
    );
  }
}
