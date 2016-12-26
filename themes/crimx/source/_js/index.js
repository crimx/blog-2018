'use strict'

/* ------------------------------------ *\
   GLOBALs
\* ------------------------------------ */
/* global $ */require('./vendors/zepto.min')

/* ------------------------------------ *\
   POLYFILLs & WORKAROUNDs
\* ------------------------------------ */
require('./fallbacks/requestAnimationFrame')
require('./fallbacks/hairline-border')
require('./fallbacks/passive-events')

$(document).ready(function () {
  require('./components/menu')
  require('./components/emojis')
  require('./components/toc')
  require('./components/footer')
  require('./components/search')

  /* ------------------------------------ *\
     TOOLs
  \* ------------------------------------ */
  require('./tools/iframe-defer')
  require('./tools/progressive-background-image')()

  /* ------------------------------------ *\
     POLYFILLs
  \* ------------------------------------ */
  require('svgxuse')
})
