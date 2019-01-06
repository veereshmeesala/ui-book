const express = require('express');
const chalk = require('chalk');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));

app.get('/', (req, res) => {
  // res.send('hello from my library app');
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port, () => {
  console.log(`listening on port ${chalk.green(port)}`);
});
