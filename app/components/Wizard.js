/*jshint esversion:6*/
import '../less/Wizard.less';
import React, { Component } from 'react';
import { Modal, Tag } from 'antd';
import { wizardToggleTag } from '../actions/wizard';
import { addTags } from '../actions/tags';
import TagImg from './TagImg';

export default class Wizard extends Component{
  constructor(props){
    super(props);
    this.state = {
      visible: true
    };
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.click = this.click.bind(this);
  }
  handleOk(){
    this.setState({visible: false});
    const { dispatch, tags } = this.props;
    dispatch(addTags(tags.filter(tag => tag.isActive)));
  }
  handleCancel(){
    this.setState({visible: false});
  }
  click(index){
    console.log(index);
    const { dispatch, tags } = this.props;
    if(tags[index].isActive || tags.filter(tag => tag.isActive).length < 5)
    {
      dispatch(wizardToggleTag(index));
    }
  }
  render(){
    const { tags } = this.props;
    return (
      <Modal title='对哪些类别书籍感兴趣(最多选5个)' visible={this.state.visible} closable={false}
        onOk={this.handleOk} okText='确定' cancelText='跳过'  onCancel={this.handleCancel}
      >
        {
          tags.map((tag, index)=><TagImg key={index} tag={tag} click={() => this.click(index)}/>)
        }
      </Modal>
    );
  }
}
