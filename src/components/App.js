import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import dynamic from 'next/dynamic';

const HeaderDefault = dynamic(import('./HeaderDefault'));
const HeaderWithMovie = dynamic(import('./HeaderWithMovie'));
const Content = dynamic(import('./Content'));
const ErrorPage = dynamic(import('./ErrorPage'));
const ErrorBoundary = dynamic(import('./ErrorBoundary'));

const App = () => (
  <ErrorBoundary>
    <>
      <Switch>
        <Route path="/" exact component={HeaderDefault} />
        <Route path="/movie/:id" component={HeaderWithMovie} />
        <Route path="/search" exact component={HeaderDefault} />
        <Route component={ErrorPage} />
      </Switch>
      <Content />
    </>
  </ErrorBoundary>
);

export default App;
