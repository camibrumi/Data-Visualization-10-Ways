attach(cars.sample)
library(ggplot2)
ggplot(cars.sample, aes(x=Weight, y=MPG, color=Manufacturer)) + 
  geom_point(aes(size=Weight, alpha=0.5))

  