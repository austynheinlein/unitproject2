const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

//******** ROUTES ********//
app.get('/', (req, res) => {
  res.send('this works')
})

//listener
app.listen(PORT, () => {
  console.log("***LISTENING***");
})
