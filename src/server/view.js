export default (content, preloadedState) => `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" />
    <link rel="icon" href="/static/favicon.ico" type="image/icon" />
    <title>Netflix Roulette</title>
    <link rel="stylesheet" href="/static/index.css">
  </head>
  <body>
    <div id="root">${content}</div>
          <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\u003c'
        )}
      </script>
      <script src="/static/bundle.js"></script>
  </body>
</html>

`;
