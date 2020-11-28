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

  loadData("./data/chart-2014.json");
};
