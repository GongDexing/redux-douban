/*jshint esversion:6*/
import React, { Component } from 'react';
import { Route } from 'react-router';
import App from './App';
import Test from './Test';
import BooksContainer from './BooksContainer';
import BookContainer from './BookContainer';
import ProfileContainer from './ProfileContainer';

export default (
    <Route>
      <Route path="/users/:id" component={ProfileContainer} />
      <Route path="/books/:id" component={BookContainer} />
      <Route path="/*" component={BooksContainer} />
    </Route>
);
