/*jshint esversion:6*/
import React, { Component } from 'react';

export default class Spinner extends Component {
  render() {
    const { status } = this.props;
    return (
      <div className={status ? "spinner-container" : "hidden"}>
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      </div>
    );
  }
}
