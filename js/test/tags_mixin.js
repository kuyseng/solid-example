describe("Tags Mixin", function() {
  var Class;
  beforeEach(function(){
    Class = function(){};
    Class.mixin.apply(Class, [Tags]);
  });

  it("has tags", function() {
    // note in js: [] == [] return false
    expect(new Class().listTags()).toEqual([]);
  });

  it("add a tags", function() {
    obj = new Class();
    obj.addTag("tutsplus");
    expect(obj.listTags()).toEqual(["tutsplus"])
  });
  it("remove a tags", function() {
    obj = new Class();
    obj.addTag("tutsplus");
    obj.addTag("w3school");
    obj.removeTag("w3school")
    expect(obj.listTags()).toEqual(["tutsplus"])
  });
});
