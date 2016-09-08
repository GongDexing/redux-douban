/*jshint esversion:6*/
import React, { Component } from 'react';
import { Modal, Button, Switch, Form, Select, Input, Slider } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;
const createForm = Form.create;

class NewAnsweor extends Component{
  constructor(props){
    super(props);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.state = {
      visible: false
    };
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.visible){
        this.setState({
          visible: true
        });
    }
  }
  handleOk() {
    this.setState({ visible: false });
  }
  handleCancel() {
    this.setState({ visible: false });
  }
  checkAreaSize(rule, value, callback){
    if(value.length > 200){
      callback(new Error('亲，不要超过200字哟！'));
    }else{
      callback();
    }
  }
  render(){
    const { visible } = this.props;
    const { getFieldProps } = this.props.form;
    // const patienceProps = getFieldProps('patience', {
    //   rules: [
    //     { required: true},
    //   ]
    // });
    // const profoundProps = getFieldProps('profound', {
    //   rules: [
    //     { required: true},
    //   ]
    // });
    // const modestProps = getFieldProps('modest', {
    //   rules: [
    //     { required: true},
    //   ]
    // });
    // const helpProps = getFieldProps('help', {
    //   valuePropName: 'checked',
    //   rules: [
    //     { required: true},
    //   ]
    // });
    const textareaProps = getFieldProps('textarea', {
          rules: [
            { required: true, message: '真的不打算写点什么吗？' },
            { validator: this.checkAreaSize}
          ],
    });
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
    };
    return(
      <div>
        <Modal ref="modal"
          visible={this.state.visible}
          title="成为答主《马云内部讲话2》"
          onOk={this.handleOk} onCancel={this.handleCancel}
          footer={[
            <Button key="back" type="ghost" size="large" onClick={this.handleCancel}>再想想</Button>,
            <Button key="submit" type="primary" size="large" onClick={this.handleOk}>申请</Button>
          ]}
        >
          <Form horizontal>
            <FormItem {...formItemLayout} label='耐心' required>
              <Switch/>
              &nbsp;<span className='unread-text'>耐心是优秀答主的重要特质</span>
            </FormItem>
            <FormItem {...formItemLayout} label='渊博' required>
              <Switch />
              &nbsp;<span className='unread-text'>没有渊博的知识如何解答该书的各种疑惑</span>
            </FormItem>
            <FormItem {...formItemLayout} label='谦逊' required>
              <Switch />
              &nbsp;<span className='unread-text'>碰到不明白的地方能够坦然接受，并且虚心向他人请教</span>
            </FormItem>
            <FormItem {...formItemLayout} label='助人' required>
              <Switch />
              &nbsp;<span className='unread-text'>愿意将自己的经验和知识无私分享给陌生人</span>
            </FormItem>
            <FormItem {...formItemLayout} label="本书熟悉程度" required>
               <Slider marks={['没听过', '听过没看过', '粗略看过', '读过很多遍', '了然于胸']} />
             </FormItem>
            <FormItem {...formItemLayout} label="答主宣言">
              <Input {...textareaProps} type="textarea" rows={7}
                name="textarea" autosize={{minRows: 7, maxRows: 7}}
                placeholder="说说您和这本书的故事，为什么要成为这本书的答主，不超过200字"  />
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default createForm()(NewAnsweor);
