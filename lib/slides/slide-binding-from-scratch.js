(function(){

  // add button play / source
  var container = d3.select("#slide-binding-from-scratch .container")
  container.append("button")
  .attr("class", "btn btn-default")
  .text("play")
  .on("click", transitionExtraData);
  container.append("a")
  .attr("href", "/lib/slides/slide-binding-from-scratch.js")
  .attr("target", "_blank")
  .append("button")
  .attr("class", "btn btn-default")
  .text("source");


  /*
   * logic to illustrate the binding and use of datas.
   * html obly contains the svg wrapper tag
   * <div class="container">
   *   <svg height="250px">
   *   </svg>
   * </div>
  */
  var datas = [30, 50, 10, 40, 5];

  var svg = container.select("svg");

  var circles = svg.selectAll("circle")
    .data(datas);

  var texts = svg.selectAll("text")
    .data(datas)
    .enter()
    .append("text")
    .attr("x", function(d,i) { return 10 + 80 *i})
    .attr("y", "50")
    .text(function(d) { return d })


  function transitionExtraData() {
    var delay0 = 1000;
    var delay = delay0;
    newCircles = circles.enter()
      .append("circle")
      .transition(delay)
      .attr("cx", function(d,i) {return 40 + 150 *i})
      .attr("cy", 150)
      .attr("r", 10)
      .attr("fill", "black");

    var delay1 = 500;
    texts.transition()
      .duration(delay1)
      .delay(delay)
      .attr("x", function(d,i) {return i*150 + 40})
      .attr("y", 150)
      .attr("opacity", 0.3)

    // var delay = delay + delay1;

    var delay2 = 500;
    var delay = delay + delay1;

    circles.transition()
      .delay(delay)
      .duration(delay2)
      .attr("r", function(d) {return d})
      .attr("fill", function(d) {
      if (d > 40) {
          return "green"
        }
        return "orange";
      })
      .attr("stroke", "black")
      .attr("stroke-width", "1px")

  }
})();
