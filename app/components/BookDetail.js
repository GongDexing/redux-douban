/*jshint esversion:6*/
import '../less/BookDetail.less';
import React, { Component } from 'react';
import { Row, Col, Button, Radio, Rate  } from 'antd';
import BookRate from './BookRate';
import Medal from './Medal';
import BookKeyValue from './BookKeyValue';

import { BOOK_KEY_MAP } from '../constant/status';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class BookDetail  extends Component{
  constructor(props){
    super(props);
  }

  renderBookDetail(){
    const { book } = this.props;
    return BOOK_KEY_MAP.map((item, index)=>{
      switch (item.type) {
        case 'array':
          return (
            <BookKeyValue key={index} name={item.name} value={book[item.key].join('，')}/>
          );
        case 'array-json':
            const value = book[item.key].map(it=>it[item.field]).join('，');
            return (
              <BookKeyValue key={index} name={item.name} value={value}/>
            );
        default:
          return (
            <BookKeyValue key={index} name={item.name} value={book[item.key]}/>
          );
      }
    });
  }
  render(){
    const { book } = this.props;
    return (
      <div className='book-detail'>
        <p className='book-title'>
          <span>{book.title}</span>&nbsp;&nbsp;
          <span className='book-key'>{book.subtitle}</span>
        </p>
        <Row>
          <Col span={5}>
              <img width='100%' src={book.images.large}/>
              <Medal name='馆 藏' />
          </Col>
          <Col span={13}>
            <div className='detail-info'>
              <p className='pull-right'>
                <Button icon="star" size="small">收藏</Button>
                &nbsp;&nbsp;
                <Button icon="tag" size="small">预约</Button></p>
                {this.renderBookDetail()}
              <p>
                <span className='book-key'>馆藏</span>：<span className='book-value'>海南省图书馆</span>
              </p>
              <br/>
              <div>
                <RadioGroup size="large">
                  <RadioButton value="a">想读</RadioButton>
                  <RadioButton value="b">在读</RadioButton>
                  <RadioButton value="c">读过</RadioButton>
                </RadioGroup>
                &nbsp;&nbsp;
                您的评价：<Rate allowHalf={true}/>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <BookRate />
          </Col>
        </Row>
      </div>
    );
  }
}
