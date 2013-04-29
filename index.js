var events = require('dom-events');
var EventEmitter = require('events').EventEmitter;

module.exports = emit;

function emit (dom) {
  var ee = new EventEmitter;
  var links = dom.getElementsByTagName('a');

  var unsubscribe = [];

  for (var i = 0; i < links.length; i++) (function (link) {
    var href = link.getAttribute('href');
    if (!RegExp('^/').test(href)) return;

    function onclick (ev) {
      ev.preventDefault
        ? ev.preventDefault()
        : ev.returnValue = false;
      ee.emit('click', href, link);
    }

    events.on(link, 'click', onclick);
    unsubscribe.push(function () {
      events.off(link, 'click', onclick);
    });
  })(links[i]);

  ee.stop = function () {
    for (var i = 0; i < unsubscribe.length; i++) {
      unsubscribe[i]();
    }
  }

  return ee;
}
