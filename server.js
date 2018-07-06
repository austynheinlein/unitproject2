const express = require('express')
const app = express()
const Port = proces.env.Port || 3000

//******** ROUTES ********//
app.get('/', (req, res) => {
  res.send('this works')
})

//listener
app.listen(Port, () => {
  console.log("***LISTENING***");
})
