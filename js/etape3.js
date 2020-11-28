window.onload = async function () {
  "use strict";
  let options = {
    width: 900,
    height: 600,
    padding: 20,
    bgcolor: "lightgray",
  };

  let container = d3.select("#container");
  let svg = container
    .append("svg")
    .attr("width", options.width)
    .attr("height", options.height)
    .attr("style", "background-color: " + options.bgcolor);

  async function loadData(path) {
    let response = await fetch(path);
    let data = await response.json();
    console.log(data);
    return data;
  }

  let mydata = await loadData("./data/chart-2014.json");

  function redraw(data) {
    let selection = svg.selectAll("rect").data(data);

    selection
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 10)
      .attr("y", 0)
      .attr("width", 10)
      .attr("height", (d) => d.value)
      .attr("stroke", "blue")
      .attr("fill", "white");
  }

  redraw(mydata);
};
