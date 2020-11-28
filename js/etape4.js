window.onload = async function () {
	'use strict';
	let options = {
		width: 900,
		height: 600,
		padding: 20,
		bgcolor: 'lightgray',
	};

	let container = d3.select('#container');
	let svg = container
		.append('svg')
		.attr('width', options.width)
		.attr('height', options.height)
		.attr('style', 'background-color: ' + options.bgcolor);

	async function loadData(path) {
		let response = await fetch(path);
		let data = await response.json();
		console.log(data);
		return data;
	}

	let mydata = await loadData('./data/chart-2014.json');

	function redraw(data) {
		let max = d3.max(data, (item) => item.value);
		let selection = svg.selectAll('rect').data(data);

		selection
			.enter()
			.append('rect')
			.delay((d, i) => i * 5)
			.attr('width', (d) => (options.width - 2 * options.padding) / data.length)
			.attr('height', (d) =>
				d.value == 0
					? 1
					: ((options.height - 2 * options.padding) * d.value) / max
			)
			.attr(
				'x',
				(d, i) =>
					(i * (options.width - 2 * options.padding)) / data.length +
					options.padding
			)
			.attr('y', (d) =>
				d.value == 0
					? options.height - options.padding - 1
					: options.height -
					  options.padding -
					  ((options.height - 2 * options.padding) * d.value) / max
			)
			.attr('stroke', 'blue')
			.attr('fill', 'white');
	}

	redraw(mydata);
};
