(function($){
  // routing
  $(window).bind('hashchange',function on_hashchange() {
    var route = get_route();
    var template_route = 'views' + route + '.html';
    var _404_route = '/404.html';
    $.get(template_route,function on_template_route_response(data) {
      $('#viewport').html(data);
    }).fail(function on_template_route_fail(fail) {
      $.get(_404_route,function on_404_route_response(data) {
        $('#viewport').html(data);
      });
    });
  }); // end-routing
  // data
  var fire = new Firebase('https://oknp.firebaseio-demo.com/');
  fire.on('child_added', function fire_on_child_added(snapshot) {
    var oknp = snapshot.val();
    var route = get_route();
    update(route,oknp);
  }); // end-data
  // helpers
  function get_route() {
    return location.hash.substr(1);
  }
  function update(route,oknp) {
    switch (route) {
      '/posts': update_posts(posts); break;
      '/about': update_about(about); break;
      '/404': update_404(_404); break;
      default: break;
    }
  }
  function update_posts(posts) {
    for (var p in posts) {
      
    }
  }
})(jQuery);
