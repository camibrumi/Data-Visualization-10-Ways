- a bit tricky when debugging the python programs (everything is a syntax error)
- easy and fast to make the first version of the scatterplot
- fast interpreter of the dataset
- I did a hack in order to get the sizes of the points. I was checking when a weight on the table was >= 4000, then I added to the array of sizes the size 200, when it was between 3000 and 4000, then I would add a size of 100 for that point, and the same thing with the weights <= 3000.
- I had to do many if-else cases in order to get the colors and the sizes of the points.

R + ggplot
I used the RStudio ide
really easy to add a file, I did not have to do any for/while loops,
I could do a complex scatterplot with only 4 lines of code!
very easy to manipulate the data you want to represent!

http://www.sthda.com/english/wiki/ggplot2-scatter-plots-quick-start-guide-r-software-and-data-visualization


d3
to run a local web server
https://cs4460.wordpress.com/d3-setup/

tutorial:
http://bl.ocks.org/jfreels/6816504

The library is pretty complex and seems impossible to understand at first how it works but taking an example from internet and starting modifying the parameters to see how it works is the way I learned a bit of d3.

I learned how to use the transition() function. My scatterplot has an animation that when the mouse stops over a point, the point is magnified and a tag with details (manufacturer, weight and MPG) pops up.

I found very d3 very flexible when it comes defining a function inside an attribute.

I tried removing the 2 points that have MPG=NA using 
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

but this did not solve my problem because the points just moved to the top left of my representation (see screenshot)

afterwards I also did the same thing with the radius, which solved my problem (see photo)
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


Flourish
it is not that flexible as using a library. for example, I can make the size of the circles to be in function of the weight, but I cannot actually scale the circles in order to have a more precise position in the plot.
I also achieved to have a tag with more details of every point in the scatter plot

I tried gnuplot but I couldn't step over this error

gnuplot> plot 'cars-sample.csv' using 8:4 with points
         warning: Skipping data file with no valid points
                                                     ^
         x range is invalid



RawGraphs
https://rawgraphs.io/
Online
Not so flexible when it comes to what points I want to add from the dataset, the tags (the scatterplot is really ugly with the tags activated).
- the difference in size it is not that visible
- I can only change the data that is represented on the X and Y-Axis, the color, size and label of the points, but nothing else
- It is fast if I only need to visualize some dataset quickly

DataWrapper
I tried it, nice user interface but it does not work to actually see the data.


for SPSS
https://statistics.laerd.com/spss-tutorials/scatterplot-using-spss-statistics.php
																																																																																																																																																																																																																																																																																																																																																																																																					
5

Excel
SPSS (from windows)

nvd3

Pixi.js
Processing
Processing.js
Tableau (The desktop version is for mac or windows brumar.cami@gmail.com, Holabola1126) --



PowerBI

















