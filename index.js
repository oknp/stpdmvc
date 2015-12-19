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
      case '/posts': update_posts(oknp.posts); break;
      case '/about': update_about(oknp.about); break;
      case '/404': update_404(oknp._404); break;
      default: break;
    }
  }
  function update_posts(posts_data) {
    var post_template_route = 'views/post.html';
    $.get(post_template_route,function on_post_template_route_response(post_template) {
      var posts_html = '';
      for (var p in posts_data) {
        posts_html += bind_post(post_template,posts[p]);
        $('.post.title',post_template).html(post_data.title);
        $('.post.body',post_template).html(post_data.body);
      }
      $('#posts').html(posts_html);
    });
  }
})(jQuery);
