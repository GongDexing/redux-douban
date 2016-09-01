/*jshint esversion:6*/
import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import { fetchBooks, initialBooks } from '../actions/books';
import { setScroll } from '../actions/scroll';
import { setQuery, setTab } from '../actions/tab';
import { activeTag } from '../actions/tags';
import { TAG_SEARCH } from '../constant/status';

const styles = {
  toobar: {
    backgroundColor: 'rgb(0, 188, 212)'
  },
  noLeft: {
    paddingLeft: 0,
  },
  title: {
    fontWeight: 'bold',
    color: 'grey',
    paddingLeft: '1rem'
  }
};
export default class Narbar extends Component{
  constructor(props){
    super(props);
    this.keyDown = this.keyDown.bind(this);
  }
  keyDown(event){
    if(event.keyCode === 13){
      const { dispatch, tab } = this.props;
      const input = this.refs.search.input;
      Promise.resolve()
        .then(() => dispatch(initialBooks()))
        .then(() => dispatch(activeTag(0)))
        .then(() => dispatch(setQuery(input.value)))
        .then(() => dispatch(setTab(TAG_SEARCH)))
        .then(() => tab === TAG_SEARCH ? dispatch(fetchBooks()) : null);
    }
  }
  render(){
    return (
      <Toolbar style={styles.toobar}>
        <ToolbarGroup firstChild={true}>
          <ToolbarTitle style={styles.title} color='#000000' text="Redux Douban" />
        </ToolbarGroup>
        <ToolbarGroup>
          <TextField ref='search' hintText="搜索全站" onKeyDown={this.keyDown}/>
          <FontIcon className="material-icons" style={styles.noLeft}>search</FontIcon>
          <ToolbarSeparator />
          <RaisedButton label="login" primary={true} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
