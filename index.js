(function($){
  $(window).bind('hashchange',function on_hashchange() {
    var route = location.hash.substr(1);
    var template_route = route + '.html';
    var 404_route = '/404.html';
    $.get(template_route,function on_template_route_response(data) {
      $('#viewport').html(data);
    }).fail(function on_template_route_fail(fail) {
      $.get(404_route),function on_404_route_response(data) {
        $('#viewport').html(data);
      });
    });
  });
})(jQuery);
