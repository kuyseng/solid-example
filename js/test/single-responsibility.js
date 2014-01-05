describe("Liker", function(){
  it("likes a post", function(done) {
    // add html in jasmine environment in tests.html
    $("#sandbox").html("<div id='post'><button id='like'></button></div>");
    new Liker();

    var expectation = function() {
      expect($("#like").html()).toEqual("2");
      done();
    };

    // register expectation to be run when element clicked.
    //$("#like").click(expectation).click();
    $("#like").on("click", expectation).click();
  });
});
