var events = require('dom-events');
var EventEmitter = require('events').EventEmitter;

module.exports = emit;

function emit (dom) {
  var ee = new EventEmitter;
  var links = dom.getElementsByTagName('a');

  for (var i = 0; i < links.length; i++) (function (link) {
    var href = link.getAttribute('href');
    if (!RegExp('^/').test(href)) return;

    events.on(link, 'click', function (ev) {
      ev.preventDefault
        ? ev.preventDefault()
        : ev.returnValue = false;
      ee.emit('click', href);
    });
  })(links[i]);

  return ee;
}
