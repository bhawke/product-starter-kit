
(function(document) {
  'use strict';
  var app = document.querySelector('#app');

  // custom transformation: scale header's title
  //var title = document.querySelector('.page-title');
  //var siteTitle = document.querySelector('.site-title');
  addEventListener('paper-header-transform', function(e) {
    var d = e.detail;
    var m = d.height - d.condensedHeight;
    var scale = Math.max(0.75, (m - d.y) / (m / 0.25)  + 0.75);

    if (scale < 1) {
      app.$.pageTitle.classList.add('condensed');
      app.$.siteTitle.classList.add('condensed');
    } else {
      app.$.pageTitle.classList.remove('condensed');
      app.$.siteTitle.classList.remove('condensed');
    }

    if (scale < 0.9) {
      app.$.pageTitle.classList.add('hidden');
    } else {
      app.$.pageTitle.classList.remove('hidden');
    }

    //Polymer.Base.transform('scale(' + scale + ') translateZ(0)', title);
  });

})(document);

