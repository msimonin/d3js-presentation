(function(){

  // add button play / source
  var container = d3.select("#slide-binding-key-function .container")

  //keep the state of the animation
  var state = 1;
  var value = [20, 40];
  container.append("button")
  .attr("class", "btn btn-default")
  .text("play")
  .on("click", function(){
    state = 1 - state;
    return transitionKeyFunction([{id:state, value: value[0]},{id:(1-state), value: value[1]}])
  });
  container.append("a")
  .attr("href", "lib/slides/slide-binding-key-function.js")
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


  var svg = container.select("svg");

  // we select all circles in the circle-group group
  // this allows to keep circle in the back and text over them
  var circleGroup = svg.select("#circle-group-binding-key-function");


  function transitionKeyFunction(datas) {
    var centers = [40, 440];

    var texts = svg.selectAll("text")
      .data(datas);

    texts.attr("x", function(d,i) {return 10 + 500 * i})
    .attr("y", "50")
    .text(function(d) { return JSON.stringify(d)});

    texts.enter()
      .append("text")
      .attr("x", function(d,i) { return 10 + 500 * i})
      .attr("y", "50")
      .text(function(d) { return JSON.stringify(d) })

    var circles = circleGroup.selectAll("circle")
    .data(datas);

    var delay0 = 2000;
    var delay = delay0;


    newCircles = circles.enter()
      .append("circle")
      .transition(delay)
      .attr("cx", function(d,i) {return centers[i]})
      .attr("cy", 150)
      .attr("r", 10)
      .attr("fill", "black");

    var delay1 = 500;
    texts.transition()
      .duration(delay1)
      .delay(delay)
      .attr("x", function(d,i) {return centers[i]})
      .attr("y", 150)
      .attr("opacity", 0.3)

    // var delay = delay + delay1;

    var delay2 = 500;
    var delay = delay + delay1;

    circles.transition()
      .delay(delay)
      .duration(delay2)
      .attr("r", function(d) {return d.value})
      .attr("fill", function(d) {
      if (d.value > 40) {
          return "green"
        }
        return "orange";
      })
      .attr("stroke", "black")
      .attr("stroke-width", "1px")

  }
})();
