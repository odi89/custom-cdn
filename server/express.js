const express = require('express');
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// create express application
const app = express();
// import App component
// const App = require('../src/components/App.jsx');
const { TestApp } = require('../src/components/TestApp.jsx');

// serve static assets
app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, '../dist')));

// for any other requests, send `index.html` as a response
app.use('*', (req, res) => {

    // read `index.html` file
    let indexHTML = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), {
        encoding: 'utf8',
    });
    // console.log(<jsx />)
    // get HTML string from the `App` component
    console.log(<TestApp/>)
    let appHTML = ReactDOMServer.renderToStaticMarkup(<TestApp />);
    // populate `#app` element with `appHTML`
    indexHTML = indexHTML.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`);
    let newHtml = appHTML
    // console.log(indexHTML)
    // set header and status
    // res.contentType('text/html');
    res.status(200);

    return res.json(newHtml);
});

// run express server on port 9000
app.listen('9000', () => {
    console.log('Express server started at http://localhost:9000');
});