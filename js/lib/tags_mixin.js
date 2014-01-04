Object.prototype.mixin = function(module) {
  for(method in module.prototype) {
    if(module.prototype.hasOwnProperty(method)) {
      this.prototype[method] = module.prototype[method]
    }
  }
};

var Tags = function() {};

Tags.prototype.listTags = function() {
  this._tags = this._tags || [];
  return this._tags;
};

Tags.prototype.addTag = function(tag) {
  this._tags = this._tags || [];
  this._tags.push(tag)
  this.publish && this.publish("addedTag");
};

Tags.prototype.removeTag = function(tag) {
  this._tags = this._tags || [];
  var index = this._tags.indexOf(tag);
  if(index > -1) this._tags.splice(index, 1);
};

Tags.prototype.tagsCount = function() {
  this._tags = this._tags || [];
  return this._tags.length;
}
