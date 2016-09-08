/*jshint esversion:6*/
import '../less/ProfileInfo.less';
import React, { Component } from 'react';
import { Row, Col, Card, Icon } from 'antd';

export default class ProfileInfo extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='profile-info'>
        <Card style={{ width: '100%' }}  bordered={false} bodyStyle={{ padding: 0 }}>
          <div>
            <img width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          </div>
          <div>
            <h2>尼古拉斯.诸葛孔明(
              <a href='#'>
                <span className='real-name-auth'>
                  <Icon type="solution" />未认证
                </span>
              </a>)
            </h2>
            <p className='info-detail'><Icon type="mail" />&nbsp;gongdexing@communion.net.com</p>
            <p className='info-detail'><Icon type="environment-o" />&nbsp;中国 北京 朝阳区</p>
            <p className='info-detail'><Icon type="smile" />&nbsp;程序小狗一枚</p>
            <p className='info-detail'><Icon type="clock-circle-o" />&nbsp;2016.09注册</p>
          </div>
        </Card>
        <br/>
        <div className='profile-rating'>
          <Row>
            <Col span={8}>
              <h1>20</h1>
              <p>答主</p>
            </Col>
            <Col span={8}>
              <h1>50</h1>
              <p>关注</p>
            </Col>
            <Col span={8}>
              <h1>50</h1>
              <small>排名</small>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
