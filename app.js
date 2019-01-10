const express = require('express');
const chalk = require('chalk');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.send('hello from my library app');
  // res.sendFile(path.join(__dirname, 'views/index.html'));
  res.render('index');
});


app.get('/ngrx', (req, res) => {
  res.render('ngrx/index');
});

app.get('/ngrx/concepts', (req, res) => {
  res.render('ngrx/concepts');
});

app.get('/ngrx/immutability', (req, res) => {
  res.render('ngrx/immutability');
});

app.get('/ngrx/concepts', (req, res) => {
  res.render('ngrx/reflinks');
});

app.get('/react', (req, res) => {
  res.render('react/index');
});

app.get('/react/test', (req, res) => {
  res.render('react/test');
});

app.listen(port, () => {
  console.log(`listening on port ${chalk.green(port)}`);
});
