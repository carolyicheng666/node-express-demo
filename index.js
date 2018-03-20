(function($){
  // get
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/get'
  }).done(function(data) {
    console.log(data);
  }).fail(function() {
    console.log("error");
  });

  // post
  $.ajax({
    type: 'post',
    url: 'http://localhost:3000/post'
  }).done(function(data) {
    console.log(data);
  }).fail(function() {
    console.log("error");
  });
})(jQuery);
