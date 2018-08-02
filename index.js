(function($){
  var init = {
    get: function() {
      $.ajax({
        type: 'get',
        url: 'http://localhost:3000/get',
        data: { id: 1 },
      }).done(function(data) {
        $('body').append(`<h1>GET</h1><p>${JSON.stringify(data, null, 2)}</p>`);
      }).fail(function() {
        console.log("error");
      });
    },
    post: function() {
      $.ajax({
        type: 'post',
        url: 'http://localhost:3000/post',
        data: { id: 2 },
      }).done(function(data) {
        $('body').append(`<h1>POST</h1><p>${JSON.stringify(data, null, 2)}</p>`);
      }).fail(function() {
        console.log("error");
      });
    },
    mock: function() {
      $.ajax({
        type: 'get',
        url: 'http://localhost:3000/mock'
      }).done(function(data) {
        $('body').append(`<h1>MOCK</h1><p>${JSON.stringify(data, null, 2)}</p>`);
      }).fail(function() {
        console.log("error");
      });
    }
  }
  
  // init.get();
  // init.post();
  // init.mock();
  /* $.when(init.get(), init.post(), init.mock()).done(function() {
    console.log("success")
  }).fail(function() {
    console.log("error")
  }) */
  $.when(init.get()).done(function() {
    init.post()
  }).done(function() {
    init.mock()
  })
})(jQuery);
