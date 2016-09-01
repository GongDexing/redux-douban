/*jshint esversion:6*/
import React, { Component } from 'react';
import Books from './Books';
import Tags from './Tags';

export default class Content extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { dispatch, tags, books, scroll, noResult, sticky} = this.props;
    return (
      <div className='row'>
          <Books books={books} scroll={scroll} dispatch={dispatch} noResult={noResult}/>
          <Tags tags={tags} dispatch={dispatch} sticky={sticky}/>
      </div>
    );
  }
}
