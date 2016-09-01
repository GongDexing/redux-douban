/*jshint esversion:6*/
import '../scss/common.scss';
import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
const styles = {
  title: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: 'rgb(231, 173, 173);'
  },
  subtitle: {
    fontSize: '0.8rem',
    color: 'rgb(231, 173, 173);'
  },
  media: {
    padding: '0px',
    paddingLeft: '5px',
    paddingBottom: '5px',
    opacity: 1
  }
};
export default class Book extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { book } = this.props;
    const { title, subtitle, media } = styles;
    return (
      <div className="col-md-2 col-sm-6 col-xs-12 book">
        <Card>
          <CardMedia
            overlay={<CardTitle style={media}
              title={book.title} titleStyle={title}
              subtitle={book.publisher} subtitleStyle={subtitle}/>}>
            <img src={book.images.large} height='240px'/>
          </CardMedia>
        </Card>
      </div>
    );
  }
}
