(function(){

  // add button play / source
  var container = d3.select("#slide-using-datas .container")
  container.append("button")
  .attr("class", "btn btn-default")
  .text("play")
  .on("click", transitionUsingData);
  container.append("a")
  .attr("href", "/lib/slides/slide-using-datas.js")
  .attr("target", "_blank")
  .append("button")
  .attr("class", "btn btn-default")
  .text("source");

  /*
   * logic to illustrate the binding and use of datas.
   * html is partially filled with svg circles and text
   * datas are bind both to text tags and circles.
   * <div class="container">
   *   <svg height="250px">
   *     <circle cx="40" cy="150" r="10" stroke="black" stroke-width="1" fill="red" opacity="1" />
   *     <circle cx="190" cy="150" r="10" stroke="black" stroke-width="1" fill="red" opacity="1" />
   *     <circle cx="340" cy="150" r="10" stroke="black" stroke-width="1" fill="red" opacity="1" />
   *     <circle cx="490" cy="150" r="10" stroke="black" stroke-width="1" fill="red" opacity="1" />
   *     <circle cx="630" cy="150" r="10" stroke="black" stroke-width="1" fill="red" opacity="1" />
   *     <text x="10" y="50"></text>
   *     <text x="90" y="50"></text>
   *     <text x="170" y="50"></text>
   *     <text x="250" y="50"></text>
   *     <text x="330" y="50"></text>
   *   </svg>
   * </div>
  */

  var datas = [30, 50, 10, 40, 5];

  var svg = d3.select("#slide-using-datas svg");

  var circles = svg.selectAll("circle")
    .data(datas);

  var texts = svg.selectAll("text")
    .data(datas)
    .text(function(d) { return d })
    .on("click", transitionUsingData);

  function transitionUsingData() {
    var delay1 = 500;
    texts.transition()
      .duration(delay1)
      .attr("x", function(d,i) {return i*150 + 40})
      .attr("y", 150)
      .attr("opacity", 0.3)

    var delay2 = 500;
    circles.transition()
      .delay(delay1 + 100)
      .transition()
      .duration(delay2)
      .attr("r", function(d) {return d})
      .transition()
      .delay(delay1 + delay2 + 500)
      .attr("fill", function(d) {
        if (d > 40) {
          return "green"
        }
        return "orange";
      });
  }

})();
