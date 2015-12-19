(function($){
  $(window).bind('hashchange',function on_hashchange() {
    var route = location.hash.substr(1);
    var template_route = route + '.html';
    $.get(template_route,function on_template_route_response(data) {
      $('#viewport').html(data);
    });
  });
})(jQuery);
