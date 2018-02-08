$.fn.scrollView = function() {
  return this.each(function() {
    $("html, body").animate(
      {
        scrollTop: $(this).offset().top
      },
      800
    );
  });
};

$(".button-how").click(function(event) {
  event.preventDefault();
  $("#target").scrollView();
});
