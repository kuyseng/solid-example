var Liker = function() {
  this.like = 1;
  this.bind();
};

Liker.prototype = {
  updateLike: function() {
    this.like++;
    this.publish("liked");
  },

  updateButtonLike: function() {
    $("#like").html(this.like);
  },

  logEntry: function() {
    $("#like-count").append("<li>" + new Date().toString() + "</li>");
  },

  render: function() {
    this.updateButtonLike();
    this.logEntry();
  },

  bind: function() {
    var that = this;
    $("#like").on("click", function(e) {
      e.preventDefault();
      that.updateLike();
    });
    this.subscribe("liked", function(){ that.render(); });
  }
}

Liker.mixin(PubSub);
