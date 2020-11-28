window.onload = async function () {
  "use strict";
  let options = {
    width: 900,
    height: 600,
    padding: 20,
    bgcolor: "lightgray"
  };

  let container = d3.select("#container");
  let svg = container
    .append("svg")
    .attr("width", options.width)
    .attr("height", options.height)
    .attr("style", "background-color: " + options.bgcolor);
};
