/*jshint esversion:6*/
import '../less/TagImg.less';
import React, { Component } from 'react';

export default class TagImg extends Component {
  constructor(props){
    super(props);
    this.click = this.click.bind(this);
  }
  click(){
    const { click } = this.props;
    click();
  }
  render(){
    const { tag } = this.props;
    return (
      <div className={(tag.isActive ? 'active ' : '') + 'tag-img'} onClick={this.click} >
        <img src={`../app/img/${tag.tag}.jpg`} />
        <span><small>{tag.tag}</small></span>
      </div>
    );
  }
}
