'use strict';
var h = Cycle.h;

function app(ext) {
  return {
    DOM: ext.get('DOM', '.myinput', 'input')
      .map(function (ev) { return ev.target.value; })
      .startWith('')
      .map(function (name) {
        return h('div', [
          h('label', 'Name:'),
          h('input.myinput', {attributes: {type: 'text'}}),
          h('hr'),
          h('h1', 'Hello ' + name)
        ]);
      })
  };
}

Cycle.run(app, {
  DOM: Cycle.makeDOMDriver('.js-container')
});
