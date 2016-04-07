(function(){

  // add button play / source
  var container = d3.select("#slide-event .container")
  container.append("a")
  .attr("href", "../lib/slides/slide-event.js")
  .attr("target", "_blank")
  .append("button")
  .attr("class", "btn btn-default")
  .text("source");

  /*
   * logic to illustrate the event listener use
  */
  var svg = d3.select("#slide-event svg");

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
                    text.text('mouseover');
                  })
                  .on('mouseout', function(d) {
                    d3.select(this)
                    .transition()
                    .duration(500)
                    .ease('elastic')
                    .attr('r', 20)
                    .attr('opacity', 0.3);

                    text.text('mouseout');
                  })
                  .on('click', function(d){
                    text.text('click');
                  })
                  .on('dblclick', function(d){
                    text.text('double click');
                  })

  var text = svg.append('text')
      .attr('x', '250px')
      .attr('y', '100px')
      .text('EVENTS')
})();
