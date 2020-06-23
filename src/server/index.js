import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import reducers from '../reducers';
import App from '../components/App';
import view from 'server/view';
import { openMovie, searchMovies, fetchMovies } from '../actions/actions';

const app = Express();
const port = 8080;

app.use('/static', Express.static('static'));

const sendResponse = (req, res, store = createStore(reducers)) => {
  const context = {};

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const preloadedState = store.getState();
  const html = view(content, preloadedState);

  res.send(html);
};

app.get('/react-moviesearch', async (req, res) => {
  const store = createStore(reducers);

  await fetchMovies()(store.dispatch, store.getState);

  return sendResponse(req, res, store);
});

app.get('/react-moviesearch/movie/:id', async (req, res) => {
  const store = createStore(reducers);

  await openMovie(req.params.id)(store.dispatch);

  return sendResponse(req, res, store);
});

app.get('/react-moviesearch/search/', async (req, res) => {
  const store = createStore(reducers);

  await searchMovies(req.query.searchValue, req.query.searchBy)(
    store.dispatch,
    store.getState
  );
  return sendResponse(req, res, store);
});

app.get('*', (req, res) => sendResponse(req, res));

app.listen(port, () => console.log(`App listening on ${port}`));
