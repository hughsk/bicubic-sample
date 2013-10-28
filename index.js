var bicubic = require('bicubic')
var floor = Math.floor

module.exports = sample

function sample(getter) {
  return function sampler(x, y) {
    var x1 = floor(x)
    var y1 = floor(y)
    var x2 = x1 + 1
    var y2 = y1 + 1

    var p00 = getter(x1 - 1, y1 - 1)
    var p01 = getter(x1 - 1, y1)
    var p02 = getter(x1 - 1, y2)
    var p03 = getter(x1 - 1, y2 + 1)

    var p10 = getter(x1, y1 - 1)
    var p11 = getter(x1, y1)
    var p12 = getter(x1, y2)
    var p13 = getter(x1, y2 + 1)

    var p20 = getter(x2, y1 - 1)
    var p21 = getter(x2, y1)
    var p22 = getter(x2, y2)
    var p23 = getter(x2, y2 + 1)

    var p30 = getter(x2 + 1, y1 - 1)
    var p31 = getter(x2 + 1, y1)
    var p32 = getter(x2 + 1, y2)
    var p33 = getter(x2 + 1, y2 + 1)

    return bicubic(
        x - x1
      , y - y1
      , p00, p10, p20, p30
      , p01, p11, p21, p31
      , p02, p12, p22, p32
      , p03, p13, p23, p33
    )
  }
}
