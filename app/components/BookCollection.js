/*jshint esversion:6*/
import React, { Component } from 'react';
import { Row } from 'antd';
import BookStar from './BookStar';
export default class BookCollection extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const book ={
      id: 4005727,
      images: {
        large: "https://img1.doubanio.com/lpic/s3957647.jpg",
        medium: "https://img1.doubanio.com/mpic/s3957647.jpg",
        small: "https://img1.doubanio.com/spic/s3957647.jpg"
      }
    };
    return (
      <Row>
        <BookStar />
        <BookStar />
        <BookStar />
        <BookStar />
        <BookStar />
        <BookStar />
        <BookStar />
        <BookStar />
        <BookStar />
        <BookStar />
      </Row>
    );
  }
}
