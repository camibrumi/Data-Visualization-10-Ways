d3.csv('cars-sample.csv', function (data) {
  // Variables
  var body = d3.select('body')
	var margin = { top: 50, right: 50, bottom: 50, left: 50 }
	var h = 500 - margin.top - margin.bottom
	var w = 500 - margin.left - margin.right
	var formatPercent = d3.format('.2%')
	// Scales
  var colorScale = d3.scale.category20()
  var xScale = d3.scale.linear()
    .domain([1300, 5300])
    .range([0,w])
  var yScale = d3.scale.linear()
    .domain([7, 46])
    .range([h,0])
	// SVG
	var svg = body.append('svg')
	    .attr('height',h + margin.top + margin.bottom)
	    .attr('width',w + margin.left + margin.right)
	  .append('g')
	    .attr('transform','translate(' + margin.left + ',' + margin.top + ')')
	// X-axis
	var xAxis = d3.svg.axis()
	  .scale(xScale)
	//  .tickFormat(formatPercent)
	  .ticks(5)
	  .orient('bottom')
  // Y-axis
	var yAxis = d3.svg.axis()
	  .scale(yScale)
//	  .tickFormat(formatPercent)
	  .ticks(5)
	  .orient('left')
  // Circles

  var circles = svg.selectAll('circle')
      .data(data)
      .enter()
    .append('circle')
      .attr('cx',function (d) {
        if (d.MPG != 'NA') {
          return xScale(d.Weight);
        }
      })
      .attr('cy',function (d) {
        if (d.MPG != 'NA') {
          return yScale(d.MPG);
        }
       })
      .attr('r',function (d) {
        if (d.MPG != 'NA') {
          var weight = d.Weight;
          if (weight >= 4000) {
            return 8;
          } else if (weight >= 3000) {
            return 5;
          } else {
            return 3;
          }
        }
       })
      .attr('stroke','black')
      .attr('stroke-width',1)
      .attr('fill',function (d) {
        switch(d.Manufacturer) {
          case 'bmw':
            return d3.rgb(255, 0, 0);
            break;
          case 'ford':
            return d3.rgb(255, 255, 0);
            break;
          case 'honda':
            return d3.rgb(0, 255, 0);
            break;
          case 'mercedes':
            return d3.rgb(0, 255, 255);
            break;
          case 'toyota':
            return d3.rgb(255, 0, 255);
            break;
        }
      })
      .style("opacity", 0.5)
      .on('mouseover', function () {
        d3.select(this)
          .transition()
          .duration(500)
          .attr('r',20)
          .attr('stroke-width',3)
      })
      .on('mouseout', function () {
        d3.select(this)
          .transition()
          .duration(500)
          .attr('r',function (d) {
            var weight = d.Weight;
            if (weight >= 4000) {
              return 8;
            } else if (weight >= 3000) {
              return 5;
            } else {
              return 3;
            }
          })
          .attr('stroke-width',1)
      })
    .append('title') // Tooltip
      .text(function (d) { return 'Manufacturer: ' + d.Manufacturer +
                           '\nMPG: ' + d.MPG +
                           '\nWeight: ' + d.Weight })
  // X-axis
  svg.append('g')
      .attr('class','axis')
      .attr('transform', 'translate(0,' + h + ')')
      .call(xAxis)
    .append('text') // X-axis Label
      .attr('class','label')
      .attr('y',-10)
      .attr('x',w)
      .attr('dy','.71em')
      .style('text-anchor','end')
      .text('Weight')
  // Y-axis
  svg.append('g')
      .attr('class', 'axis')
      .call(yAxis)
    .append('text') // y-axis Label
      .attr('class','label')
      .attr('transform','rotate(-90)')
      .attr('x',0)
      .attr('y',5)
      .attr('dy','.71em')
      .style('text-anchor','end')
      .text('MPG')
})
