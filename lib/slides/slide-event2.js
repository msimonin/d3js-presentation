(function(){

  // add button play / source
  var container = d3.select("#slide-event2 .container")
  container.append("a")
  .attr("href", "lib/slides/slide-event2.js")
  .attr("target", "_blank")
  .append("button")
  .attr("class", "btn btn-default")
  .text("source");

  /*
   * logic to illustrate the event listener use
  */
  var svg = d3.select("#slide-event2 svg");

  // add some event listener to the circle
  var circle = svg.append('circle')
                  .attr('cx', '100px')
                  .attr('cy', '100px')
                  .attr('r', 20)
                  .attr('opacity', 0.3)
                  .attr('fill', 'red')
                  .on('mouseover', function(d) {
                    d3.select(this)
                    .transition()
                    .duration(500)
                    .ease('elastic')
                    .attr('r', 50)
                    .attr('opacity', 1);
                    text.text('mouseover ' + JSON.stringify(d3.mouse(this)));
                    console.log(d3.event);
                    console.log(d3.mouse(this));
                  })
                  .on('mouseout', function(d) {
                    d3.select(this)
                    .transition()
                    .duration(500)
                    .ease('elastic')
                    .attr('r', 20)
                    .attr('opacity', 0.3);
                    text.text('mouseout ' + JSON.stringify(d3.mouse(this)));
                  })
                  .on('click', function(d){
                    text.text('click ' + JSON.stringify(d3.mouse(this)));
                  })
                  .on('dblclick', function(d){
                    text.text('double click ' + JSON.stringify(d3.mouse(this)));
                  })

  var text = svg.append('text')
      .attr('x', '250px')
      .attr('y', '100px')
      .text('EVENTS')
})();
