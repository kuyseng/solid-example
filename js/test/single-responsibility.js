describe("Liker", function(){
  it("likes a post", function(done) {
  //it("likes a post", function() {
    // add html in jasmine environment in tests.html
    $("#sandbox").html("<div id='post'><button id='like'></button></div>");
    liker = new Liker();
    new Twitter(liker)

    var expectation = function() {
      expect($("#like").html()).toEqual("2");
      done();
    };

    // register expectation to be run when element clicked.
    $("#like").click(expectation).click();
    //$("#like").on("click", expectation).click();
    //$("#like").click()
    //expect($("#like").html()).toEqual("2");

  });
});
