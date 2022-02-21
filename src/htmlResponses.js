const fs = require('fs'); // Pull in the file system module

const index = fs.readFileSync(`${__dirname}/../public/index.html`);
const css = fs.readFileSync(`${__dirname}/../src/index.css`);

// A simple helper function for serving up static files
const serveFile = (response, file, contentType) => {
  response.writeHead(200, { 'Content-Type': contentType });
  response.write(file);
  response.end();
};

// Serve the client.html page
const getIndex = (request, response) => {
  serveFile(response, index, 'text/html');
};

// Serve the style.css page
const getCSS = (request, response) => {
  serveFile(response, css, 'text/css');
};

module.exports = {
  getIndex,
  getCSS,
};
