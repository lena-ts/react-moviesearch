import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
        <Route path="/react-moviesearch/" exact component={HeaderDefault} />
        <Route
          path="/react-moviesearch/movie/:id"
          component={HeaderWithMovie}
        />
        <Route
          path="/react-moviesearch/search"
          exact
          component={HeaderDefault}
        />
        <Route component={ErrorPage} />
      </Switch>
      <Content />
    </>
  </ErrorBoundary>
);

export default App;
