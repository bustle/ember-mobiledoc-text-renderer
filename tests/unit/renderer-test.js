import Renderer from 'ember-mobiledoc-text-renderer';
import { module, test } from 'qunit';

module('Unit | Renderer');

test('it exists', function(assert) {
  assert.ok(!!Renderer);
});

test('it renders simple mobiledoc', (assert) => {
  let mobiledoc = {
    version: '0.2.0',
    sections: [
      [],
      [
        [1, 'P', [
          [[], 0, 'Hello, world']
        ]]
      ]
    ]
  };
  let renderer = new Renderer();
  let rendered = renderer.render(mobiledoc);
  assert.equal(rendered.result, 'Hello, world');
  assert.ok(!!rendered.teardown, 'has teardown');
});
