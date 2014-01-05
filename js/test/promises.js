describe("Promises", function(){
  it("is resolved", function(done){
    var output = "";
    getJSON("/example/promise.json")
    .then(function(data){
      output = "get json back!";
    }, function(error){
      expect(output).toBe("get json back!", "** Promise failed **");
      done();
    })
    .then(function() {
      expect(output).toBe("get json back!");
      done();
    });
  });
});
