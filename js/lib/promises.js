function getJSON(url) {
  var promise = new RSVP.Promise(function(respond, failure){
    $.ajax({
      dataType: "json",
      url: url,
      success: function(data) { respond(data) },
      error: function(xhr, status, error) { failure([xhr, status, error]) }
    });
  });

  return promise;
};
