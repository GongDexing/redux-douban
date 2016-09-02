/*jshint esversion:6*/
import '../less/NoResult.less'
import React, {Component} from 'react';

export default class NoResult extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className='no-result'>
        囧，没有找到书，换个查询条件试试!!!
      </div>
    );
  }
}
