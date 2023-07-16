const express = require('express')
const app = express()
const port = 3000

function handleSum(req, res){
  var finalSum = 0;
  for(var i = 0; i < 100; i++){
    finalSum = finalSum + i;
  }
  var ans = `Sum is ${finalSum}`
  res.send(ans);
}

app.get('/handleSum', handleSum)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})