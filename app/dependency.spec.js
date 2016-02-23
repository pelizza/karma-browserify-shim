var loadedDependency = require('./dependency');
describe('dependency', function() {
  it('should load everything', function() {
    expect(loadedDependency).toBeDefined();
    expect(loadedDependency.angularVar).toBeDefined();
    expect(loadedDependency.jqueryVar).toBeDefined();
  });
});