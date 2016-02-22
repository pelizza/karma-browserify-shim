var loadedDependency = require('./dependency');
describe('dependency', function() {
  it('should load everything', function() {
    expect(loadedDependency).notToBeUndefined();
    expect(loadedDependency.angularVar).notToBeUndefined();
    expect(loadedDependency.jqueryVar).notToBeUndefined();
  });
});