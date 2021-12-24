const path = require('path');
const express = require('express');
const router = express.Router();

const app = express();

//---INITIALIZE THE APP---
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

//---ROUTES---
//https://expressjs.com/en/guide/routing.html
app.get('/');
router.get('/');

//---WEB ROUTES---
// this will load the file in this directory
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

//---START THE SERVER---
app.listen(process.env.PORT || 3000, () => {
  console.log('---SERVER STARTED---')
})