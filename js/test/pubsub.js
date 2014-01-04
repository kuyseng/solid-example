describe("Pubsub", function() {
  it("prints the tag count via pubsub for each added tag", function(){
    var Class = function(){};
    Class.mixin.apply(Class, [Tags]);
    Class.mixin.apply(Class, [PubSub]);

    var obj = new Class();
    var output = "";
    obj.subscribe("addedTag", function(){
      output = this.tagsCount().toString()
    });
    obj.addTag("tutsplus");
    expect(output).toEqual("1");
  });
});
