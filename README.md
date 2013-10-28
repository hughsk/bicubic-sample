# bicubic-sample [![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

Conveniently interpolate arbitrary 2D grids using bicubic interpolation.

## Usage ##

[![bicubic-sample](https://nodei.co/npm/bicubic-sample.png?mini=true)](https://nodei.co/npm/bicubic-sample)

### `sample = require('bicubic-sample')(getter)` ###

Returns a `sample` function that you can pass points to.

`getter` is a function which takes an `x` and `y` argument and should return
the value at that point in space. These values will both always be integers.

### `sample(x, y)` ###

You can now pass any pair of x/y values to `sample` and get an interpolated
result.

`sample(0,0)` is the equivalent of `getter(0,0)`, however if you were to call
`sample(0.5,0.5)` the result would be a smooth and curvy interpolation between
the surrounding points.

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/bicubic-sample/blob/master/LICENSE.md) for details.
