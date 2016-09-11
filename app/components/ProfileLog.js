/*jshint esversion:6*/
import '../less/ProfileLog.less';
import React, { Component } from 'react';
import { Timeline, Icon } from 'antd';
const TimeItem = Timeline.Item;
export default class ProfileLog extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className='profile-log'>
        <Timeline>
          <Timeline.Item
            dot={<Icon type="star" style={{ fontSize: '16px' }} />}
            ><span className='time-mark'>2015-09-07 09:06</span>&nbsp;&nbsp;&nbsp;&nbsp;收藏《java编程思想》 </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="eye-o" style={{ fontSize: '16px' }} />}
            ><span className='time-mark'>2015-09-07 09:06</span>&nbsp;&nbsp;&nbsp;&nbsp;关注 尼古拉斯.诸葛孔明</Timeline.Item>
          <Timeline.Item
            dot={<Icon type="edit" style={{ fontSize: '16px' }} />}
            ><span className='time-mark'>2015-09-07 09:06</span>&nbsp;&nbsp;&nbsp;&nbsp;对《21天精通java》发表书评</Timeline.Item>
          <Timeline.Item
            dot={<Icon type="edit" style={{ fontSize: '16px' }} />}
            ><span className='time-mark'>2015-09-11 19:06</span>&nbsp;&nbsp;&nbsp;&nbsp;对《21天精通java》发表书评</Timeline.Item>
          <Timeline.Item
            dot={<Icon type="eye-o" style={{ fontSize: '16px' }} />}
            ><span className='time-mark'>2015-09-10 08:06</span>&nbsp;&nbsp;&nbsp;&nbsp;关注 尼古拉斯.诸葛孔明</Timeline.Item>
          <Timeline.Item
            dot={<Icon type="eye-o" style={{ fontSize: '16px' }} />}
            ><span className='time-mark'>2015-09-07 17:06</span>&nbsp;&nbsp;&nbsp;&nbsp;关注 尼古拉斯.诸葛孔明</Timeline.Item>
          <Timeline.Item
            dot={<Icon type="edit" style={{ fontSize: '16px' }} />}
            ><span className='time-mark'>2015-09-06 15:06</span>&nbsp;&nbsp;&nbsp;&nbsp;对《21天精通java》发表书评</Timeline.Item>
          <Timeline.Item
            dot={<Icon type="edit" style={{ fontSize: '16px' }} />}
            ><span className='time-mark'>2015-09-04 10:06</span>&nbsp;&nbsp;&nbsp;&nbsp;预定海南省图书馆《世界是平的》</Timeline.Item>
          <Timeline.Item
            dot={<Icon type="user" style={{ fontSize: '16px' }} />}
            ><span className='time-mark'>2015-09-01 09:06</span>&nbsp;&nbsp;&nbsp;&nbsp;注册</Timeline.Item>
        </Timeline>
      </div>
    );
  }
}
