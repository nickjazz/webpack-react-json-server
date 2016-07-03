## simple webpack+react+json-server demo

### Main tools
* eslint
* json-server
* sass
* webpack
* faker
* jQuery
* lodash
* react
* react-router
* LiveReload

About
====================
![demo](http://i.imgur.com/Nw2ecNG.png)

- Use json-server as CRUD api server. work perfectly with Postman.
- faker and lodash create a random data we need to test.
- webpack everything for web browser (sass, react, eslint check), output two files, app.js & app.css
- React do everything on front end, included react-router do all router control.
- Add and Destroy user.
- Destroy action just a mock-action, need destroy actual data on server by ajax call.

Usage
====================
* npm install
* node server.js
* webpack --watch for dev
