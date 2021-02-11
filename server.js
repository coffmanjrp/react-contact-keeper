const express = require('express');
const colors = require('colors');

const app = express();

app.get('/', (req, res) => {
  res.send('HEllO ');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`.blue.bold));
