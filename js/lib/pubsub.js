var PubSub = function(){};

PubSub.prototype.subscribe = function(topic, callback) {
  this._topics = this._topics || {};
  this._topics[topic] = this._topics[topic] || [];
  var context = context || this;
  this._topics[topic].push({context: context, callback: callback})
};

PubSub.prototype.publish = function(topic) {
  this._topics = this._topics || {};
  this._topics[topic] = this._topics[topic] || [];
  this._topics[topic].forEach(function(subscription) {
    subscription.callback.call(subscription.context);
  });
};
