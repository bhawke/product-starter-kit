
(function(document) {
  'use strict';

  // custom transformation: scale header's title
  var title = document.querySelector('.page-title');
  var siteTitle = document.querySelector('.site-title');
  addEventListener('paper-header-transform', function(e) {
    var d = e.detail;
    var m = d.height - d.condensedHeight;
    var scale = Math.max(0.75, (m - d.y) / (m / 0.25)  + 0.75);

    if (scale < 1) {
      title.classList.add('condensed');
      siteTitle.classList.add('condensed');
    } else {
      title.classList.remove('condensed');
      siteTitle.classList.remove('condensed');
    }

    if (scale < .9) {
      title.classList.add('hidden');
    } else {
      title.classList.remove('hidden');
    }

    //Polymer.Base.transform('scale(' + scale + ') translateZ(0)', title);
  });

})(document);

