(function(){

  // add button play / source
  var container = d3.select("#slide-extra-datas .container")
  container.append("button")
  .attr("class", "btn btn-default")
  .text("play")
  .on("click", transitionExtraData);
  container.append("a")
  .attr("href", "../lib/slides/slide-extra-datas.js")
  .attr("target", "_blank")
  .append("button")
  .attr("class", "btn btn-default")
  .text("source");


  /*
   * logic to illustrate the binding and use of datas.
   * html is partially filled with svg circles and text
   * datas are bind both to text tags and circles.
   * but we have mre datas than existing circles....
   * <div class="container">
   *   <svg height="250px">
   *     <circle cx="40" cy="150" r="10" stroke="black" stroke-width="1" fill="red" opacity="1" />
   *     <circle cx="190" cy="150" r="10" stroke="black" stroke-width="1" fill="red" opacity="1" />
   *     <circle cx="340" cy="150" r="10" stroke="black" stroke-width="1" fill="red" opacity="1" />
   *     <text x="10" y="50"></text>
   *     <text x="90" y="50"></text>
   *     <text x="170" y="50"></text>
   *     <text x="250" y="50"></text>
   *     <text x="330" y="50"></text>
   *   </svg>
   * </div>
  */
  var datas = [30, 50, 10, 40, 5];

  var svg = container.select("svg");

  // we select all circles in the circle-group group
  // this allows to keep circle in the back and text over them
  var circleGroup = svg.select("#circle-group-extra");
 
  // we bind the data to the text elements
  // in this example there is exactly 5 text element
  var texts = svg.selectAll("text")
    .data(datas)
    .text(function(d) { return d })


  function transitionExtraData() {
    var delay0 = 1000;
    var delay = delay0;

    var circles = circleGroup.selectAll("circle")
    .data(datas);
 
    // this will be applied for the 2 new circles
    newCircles = circles.enter()
      .append("circle")
      .transition(delay)
      .attr("cx", function(d,i) {return 40 + 150 *i})
      .attr("cy", 150)
      .attr("r", 10)
      .attr("fill", "black");

    var delay1 = 500;
    // this is applied to text element
    texts.transition()
      .duration(delay1)
      .delay(delay)
      .attr("x", function(d,i) {return i*150 + 40})
      .attr("y", 150)
      .attr("opacity", 0.3)

    var delay2 = 500;
    var delay = delay + delay1;
    
    // this will be applied on all circles
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
