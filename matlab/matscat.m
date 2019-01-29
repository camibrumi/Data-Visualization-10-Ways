x = carssample.Weight;
y = carssample.MPG;
sarr = x;
for c = 1:97
    if sarr(c) >= 4000
        sarr(c) = 160;
    elseif sarr(c)>= 3000
         sarr(c) = 70;
    else
         sarr(c) = 20;
    end
end
sz = sarr;
c = carssample.Manufacturer;
scatter(x, y, sz, c, 'filled', 'MarkerFaceAlpha',.5)