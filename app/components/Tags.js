/*jshint esversion:6*/
import React, { Component } from 'react';
import { Tag, Card, Input, Icon } from 'antd';
import { addTag, toggleTag } from '../actions/tags';
import { TAG_GUESS, TAG_SEARCH } from '../constant/status';
export default class Tags extends Component{
  constructor(props){
    super(props);
    this.pressEnter = this.pressEnter.bind(this);
    this.click = this.click.bind(this);
  }
  pressEnter(event){
    const { dispatch } = this.props;
    if(this.refs.newTag.refs.input.value.replace(/\s+/g, '') === ''){
        return ;
    }
    dispatch(addTag(this.refs.newTag.refs.input.value));
    this.refs.newTag.refs.input.value = '';
  }
  click(e, index){
    e.preventDefault();
    const { dispatch, tags } = this.props;
    dispatch(toggleTag(index));
  }
  render(){
    const { tags } = this.props;
    return(
      <div className='right-side'>
        <Card title="书签">
          <Input ref='newTag' onPressEnter={this.pressEnter} placeholder='输入书签，敲回车添加' onKeyDown={this.keyDown}/>
          <div style={{ margin: '16px 0' }} />
          {
            tags.map((tag, index) =>{
              if(tag.tag === TAG_GUESS){
                return (<Tag key={index} onClick={(e) => this.click(e, index)}
                          color={tag.isActive?'red':''}><Icon type="heart-o"/> {tag.tag} </Tag>);
              }else if(tag.tag === TAG_SEARCH){
                return (<Tag key={index} onClick={(e) => this.click(e, index)}
                          color={tag.isActive?'red':''}><Icon type="search"/> {tag.tag} </Tag>);
              }else{
                return (<Tag closable key={index} onClick={(e) => this.click(e, index)}
                    color={tag.isActive?'red':''}>{tag.tag} </Tag>);
              }
            })
          }
        </Card>
      </div>
    );
  }
}
