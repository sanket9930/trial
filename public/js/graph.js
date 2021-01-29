Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}
let graph = require('../../routes/user');
let graphShow = graph.shareSym;
console.log(graphShow);

var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'AAPL Close',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'AAPL.Close'),
  line: {color: '#17BECF'}
}


var data = [trace1];

var layout = {
  title: 'Basic Time Series',
};

Plotly.newPlot('myDiv', data, layout,{});
})