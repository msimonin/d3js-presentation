(function(){

  // add button play / source
  var container = d3.select("#slide-sqrt-scale .container")
  container.append("a")
  .attr("href", "../lib/slides/slide-sqrt-scale.js")
  .attr("target", "_blank")
  .append("button")
  .attr("class", "btn btn-default")
  .text("source");

  var datas = [0.5, 1];
  var rScale = d3.scale.sqrt().range([0,50]);
  var rLinScale = d3.scale.linear().range([0,50]);
  var svg = container.select("svg");

  var sqrtGroup = svg.append('g');
  var linGroup = svg.append('g');

  sqrtGroup.selectAll('circle')
    .data(datas)
    .enter()
    .append('circle')
    .attr("cx", function(d,i){return 200 + 200 *i})
    .attr("cy", 50)
    .attr('r', function(d){return rScale(d)})
    .attr('fill', 'red')
    .attr('opacity', 0.7)
    .attr('stroke', 'blue');
  sqrtGroup.append('text')
  .attr('x', 50)
  .attr('y', 50)
  .text('sqrt');
  sqrtGroup.append('text')
  .attr('x', 500)
  .attr('y', 50)
  .text('surface is 2x bigger')

  linGroup.selectAll('circle')
    .data(datas)
    .enter()
    .append('circle')
    .attr("cx", function(d,i){return 200 + 200 *i})
    .attr("cy", 160)
    .attr('r', function(d){return rLinScale(d)})
    .attr('fill', "blue")
    .attr('opacity', 0.7)
    .attr('stroke', "red")
    linGroup.append('text')
    .attr('x', 50)
    .attr('y', 160)
    .text('linear')
    linGroup.append('text')
    .attr('x', 500)
    .attr('y', 160)
    .text('surface is 4x bigger')


})();
