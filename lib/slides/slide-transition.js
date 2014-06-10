(function(){

  // add button play / source
  var container = d3.select("#slide-transition .container");
  container.append("button")
  .attr("class", "btn btn-default")
  .text("play")
  .on("click", transitions);

  container.append("a")
  .attr("href", "/lib/slides/slide-transition.js")
  .attr("target", "_blank")
  .append("button")
  .attr("class", "btn btn-default")
  .text("source");

  // create a circle
  var circle = container.select("svg")
    .append("circle")
    .attr("cx", "200")
    .attr("cy", "50")
    .attr("r", "40")
    .attr("opacity", "1")
    .attr("stroke", "black")
    .attr("stroke-width", "3")
    .attr("fill", "red")
    .on("click", circleTransition);

  // transition the circle
  function circleTransition() {
    circle.transition()
    .duration(2000)
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 10)
    .attr("opacity", "0.1")
    .transition()
    .attr("cx", "200")
    .attr("cy", "50")
    .attr("r", "40")
    .attr("opacity", "1");

  }


  var rect = d3.select("#slide-transition svg")
    .append("rect")
    .attr("x", 350)
    .attr("y", 30)
    .attr("width", 20)
    .attr("height", 20)
    .attr("fill", "blue")
    .attr("stroke", "pink")
    .attr("stroke-width",1)
    .attr("opacity", "0.1")
    .on("click", rectTransition);

  function rectTransition() {
    rect.transition()
     .duration(2000)
    .attr("x", 450)
    .attr("y", 0)
    .attr("width", 100)
    .attr("height", 100)
    .attr("opacity", "1")
    .attr("fill", "red")
    .transition()
    .duration(250)
    .attr("x", 350)
    .attr("y", 30)
    .attr("width", 20)
    .attr("height", 20)
    .attr("fill", "orange")
    .attr("stroke", "pink")
    .attr("opacity", "0.1");
  }

  var line = d3.select("#slide-transition svg")
      .append("line")
      .attr("x1", 600)
      .attr("y1", 100)
      .attr("x2", 800)
      .attr("y2", 50)
      .style("stroke", "rgb(0,200,50)")
      .attr("stroke-width", 5)
      .on("click", lineTransition);

  function lineTransition() {
    line.transition()
      .duration(2000)
      .attr("x1", 600)
      .attr("y1", 10)
      .attr("x2", 650)
      .attr("y2", 50)
      .style("stroke", "rgb(255,0,0)")
      .attr("stroke-width", 2)
      .transition()
      .duration(700)
      .attr("x1", 600)
      .attr("y1", 100)
      .attr("x2", 800)
      .attr("y2", 50)
      .style("stroke", "rgb(0,200,0)")
      .attr("stroke-width", 5);

  }

  function transitions(){
    circleTransition();
    rectTransition();
    lineTransition();
  }

})();
