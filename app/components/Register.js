/*jshint esversion:6*/

import React, { Component } from 'react';
import { Modal, Button, Form, Input, Checkbox } from 'antd';
const createForm = Form.create;
const FormItem = Form.Item;

class Register extends Component{
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
  render(){
    const { visible } = this.props;
    const { getFieldProps } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    };
    return(
      <Modal ref="modal"
        visible={this.state.visible}
        title="注册"
        onOk={this.handleOk} onCancel={this.handleCancel}
        closable={false}
        footer={[
          <Button key="submit" type="primary" size="large" onClick={this.handleOk}>注册</Button>,
          <Button key="back" type="ghost" size="large" onClick={this.handleCancel}>取消</Button>
        ]}
      >
        <Form horizontal>
          <FormItem {...formItemLayout} label='姓名'  required>
            <Input />
          </FormItem>
          <FormItem {...formItemLayout} label='手机号' required>
            <Input />
          </FormItem>
          <FormItem {...formItemLayout} label='密码' required>
            <Input />
          </FormItem>
        </Form>
      </Modal>
    );
  }
}
export default createForm()(Register);
