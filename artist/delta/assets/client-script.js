$(function() {

  /* prev / next from keyboard */
  $(document.documentElement).keydown(function(e) {
    if(e.which == 37 || e.which == 39) {
      e.preventDefault();
      if (e.which == 37) // left
        link = $('.prev a');
      else
        link = $('.next a');
      if (link.length == 1) {
        window.location = link.attr('href');
      }
    }
  });
  
});





