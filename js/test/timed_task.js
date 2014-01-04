describe("Timed Task", function() {
  it("has a title", function() {
    expect((new TimedTask({title: "My timed task"})).title).toEqual("My timed task");
  });
  it("has a starting time", function() {
    expect((new TimedTask()).startingDate).toBeGreaterThan(12345);
  });
});
