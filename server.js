const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors');

app.use(cors())
app.use('/', express.static(path.join(__dirname, 'client/build')))

app.get('/patch-notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'patchnotes.json'))
})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build/index.html'), function(err) {
     if (err) {
      res.status(500).send(err)
     }
   })
})

app.listen(5001, () => {
    console.log('Connecté sur port 5001')
})