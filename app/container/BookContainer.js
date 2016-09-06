/*jshint esversion:6*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import BookDetail from '../components/BookDetail';
import BookBrief from '../components/BookBrief';
import UserList from '../components/UserList';
import Comments from '../components/Comments';
import Spinner from '../components/Spinner';
import NoResult from '../components/NoResult';
import { fetchBook } from '../actions/book';
class BookContainer extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const { dispatch, id } = this.props;
    dispatch(fetchBook(id));
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.id !== this.props.id){
      const { dispatch, id } = nextProps;
      dispatch(fetchBook(id));
    }
  }
  render(){
    const { book, fetch } = this.props;
    if(fetch){
      return (<Spinner status={true}/>);
    }else if(!book.id){
      return (<NoResult />);
    }else{
      return (
        <Row>
          <Col span={16} offset={1}>
            <BookDetail book={book}/>
            <BookBrief text={book.catalog}/>
          </Col>
          <Col span={6}>
            <UserList />
            <Comments />
          </Col>
        </Row>
      );
    }
  }
}
function mapStateToProps(state){
  const { book, fetch } = state;
  return {
    book,
    fetch
  };
}
export default connect(mapStateToProps)(BookContainer);
