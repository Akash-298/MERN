const express = require("express");
const app = express();
const port = 3000;

function calculateSum(counter) {
  var sum = 0;

  for (var i = 0; i < counter; i++) {
    sum = sum + i;
  }

  return sum;
}

function handleFirstRequest(req, res) {
  var cou = req.query.counter;
  var calculatedSum = calculateSum(cou);
  //call the site by localhost:3000&counter=1000
  console.log(calculatedSum);

  var answer = "the sum is " + calculatedSum;

  res.send(answer);
}

function handleSecondRequest(req, res) {
  res.send("fsss");
}

app.get("/handleSum1", handleFirstRequest);
app.get("/handleSum2", handleSecondRequest);

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);
