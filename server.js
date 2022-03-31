const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors');
const fs = require('fs')
app.use(cors())
app.use(express.json())
app.use('/', express.static(path.join(__dirname, 'client/build')))

app.get('/patch-notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'patchnotes.json'))
})

app.post('/patch-notes', (req, res) => {
  if(req.headers.authorization == "U3lua29Qb3N0QU5ld1BhdGNoTm90ZUJ1dFlvdUNhbnRXaXRob3V0VGhpc0xvbmdTZWN1cmVkS2V5"){
    fs.readFile('./patchnotes.json', (err, data) => {
      data = JSON.parse(data);
      data.push(req.body.patchnote)
      fs.writeFile('./patchnotes.json', JSON.stringify(data), (err, data) => {
        if(err) console.log(err)
        else res.status(200).json({message: "Patch note successfully added"})
      })
    })
  } else return res.status(403).json({message: "Ah batard tu post ?"})
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