/*jshint esversion:6*/
import '../less/ProfileData.less';
import React, { Component } from 'react';
import { Tabs, Icon, Button } from 'antd';
const TabPane = Tabs.TabPane;

export default class ProfileData extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div className='clearfix'>
          <div className='profile-operate'>
            <Button type="primary">关注</Button>
            &nbsp;&nbsp;
            <Button type="ghost">拉黑</Button>
          </div>
          <Tabs defaultActiveKey="1">
            <TabPane tab={<span><Icon type="edit" />书评</span>} key="1">
              选项卡二内容选项卡二内容选项卡二内容选项卡二内容选项卡二内容选项卡二内容选项卡二内容选项卡二内容选项卡二内容选项卡二内容选项卡二内容选项卡二内容
            </TabPane>
            <TabPane tab={<span><Icon type="star-o" />收藏</span>} key="2">选项卡一内容</TabPane>
            <TabPane tab={<span><Icon type="customerservice" />轨迹</span>} key="3">选项卡三内容</TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
