fetch('https://cdn.rawgit.com/ArvinH/f47671a9ff33b6719b043945d36054ac/raw/09a6ea23ee40d4a83205eef6d4fd4e5efa072c2b/104life.json')
  .then(function (response) {
    return response.json();
  }).then(function (parsedJson) {
    generateGraph(parsedJson);
  }).catch(function (ex) {
    console.log('parsing failed', ex)
  })

function generateGraph(jsonData) {
  var data = jsonData.map(function(obj) {return obj.value;});
  var hscale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 500]);

  var color = d3.scaleLinear().domain([0, d3.max(data)])
    .interpolate(d3.interpolateHcl).range(['#ffb3ba', '#bae1ff']);

  d3.select('#svgParent').selectAll("g").data(data)
    .enter()
    .append("g")
    .attr("class", "bar");

  d3.select("#svgParent")
    .selectAll("g.bar")
    .each(function (d, i) {
      // d3.select(this).selectAll("*").remove();
      var x = i * 100 + 20;
      var y = 500 - hscale(d) / 2;
      var rw = 100;
      var rh = hscale(d) / 2;
      var sketchyBar = d3.sketchy.rect();
      sketchyBar
        .height(rh)
        .width(rw)
        .x(x)
        .y(y)
        .fill(color)
        .stroke("black")
        .strokeWidth(10)
        .jostle(5)
      d3.select(this).call(sketchyBar);
    })
}