const express = require('express');
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { createRepo } = require("./devtools")

// create express application
const app = express();
// import App component
// const App = require('../src/components/App.jsx');
const { TestApp, } = require('../src/components/TestApp.jsx');
const { App } = require("../src/components/App")

// serve static assets
app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, '../dist')));

// for any other requests, send `index.html` as a response
app.get('/', (req, res) => {

    // read `index.html` file
    let indexHTML = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), {
        encoding: 'utf8',
    });
    // console.log(<jsx />)
    // get HTML string from the `App` component
    console.log(<App />)
    let appHTML = ReactDOMServer.renderToStaticMarkup(<App />);
    // populate `#app` element with `appHTML`
    indexHTML = indexHTML.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`);
    let newHtml = appHTML
    // console.log(indexHTML)
    // set header and status
    // res.contentType('text/html');
    res.status(200);

    return res.send(indexHTML);
});

app.get("/create", (req, res) => {
console.log("you hit the server")
createRepo()
})

// app.use('*', (req, res) => {

//     // read `index.html` file
//     let indexHTML = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), {
//         encoding: 'utf8',
//     });
//     let appHTML = ReactDOMServer.renderToStaticMarkup(<App />);
//     // populate `#app` element with `appHTML`
//     indexHTML = indexHTML.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`);
//     let newHtml = appHTML
//     // console.log(indexHTML)
//     // set header and status
//     // res.contentType('text/html');
//     res.status(200);

//     return res.send(indexHTML);
// });


// run express server on port 9000
app.listen('9000', () => {
    console.log('Express server started at http://localhost:9000');
});