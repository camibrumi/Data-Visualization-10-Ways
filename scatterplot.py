import numpy as np
import matplotlib.pyplot as plt
import csv

x = []
y = []
z = []
size = []

f, ax = plt.subplots(1)


with open('cars-sample.csv','r') as csvfile:
    plots = csv.reader(csvfile, delimiter=',')
    i = 0;
    for line in plots:
        if i > 0 and line[3] != "NA":
            # weight array
            weight = int(line[7])
            x.append(weight)
            # MPG array
            y.append(float(line[3]))
            # color array
            color = 0
            manufacturer = line[2]
            if manufacturer == "bmw":
                color = 1;
            elif manufacturer == "ford":
                color = 2;
            elif manufacturer == "honda":
                color = 3;
            elif manufacturer == "mercedes":
                color = 4;
            elif manufacturer == "toyota":
                color = 5;
            z.append(color)
            # size array
            if weight >= 4000:
                size.append(200)
            elif weight >= 3000:
                size.append(100)
            else:
                size.append(20)

        i += 1



ax.scatter(x,y, c=z, s=size, alpha=0.5)
ax.set_xlim(left=1600, right=5300)
ax.set_ylim(bottom=7, top=47)
plt.xlabel('Weight')
plt.ylabel('MPG')
#plt.legend()
plt.show(f)



"""
# Fixing random state for reproducibility
np.random.seed(19680801)


N = 50
x = np.random.rand(N)
y = np.random.rand(N)
colors = np.random.rand(N)
area = (30 * np.random.rand(N))**2  # 0 to 15 point radii

plt.scatter(x, y, s=area, c=colors, alpha=0.5)
plt.show() """
