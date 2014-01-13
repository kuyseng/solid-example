var Twitter = function(liker) {
  this.bindTweet(liker)
}

Twitter.prototype = {
  bindTweet: function(liker) {
    that = this;
    liker.subscribe("liked", function(){ that.tweet(); });
  },
  tweet: function() {
    console.log("sending a tweet...")
  }
}

Twitter.mixin(PubSub);
