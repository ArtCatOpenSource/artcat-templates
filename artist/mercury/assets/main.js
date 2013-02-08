$(document).ready(function() {

  $('.detail .grid_column .contains_image').filter(':odd').addClass('odd');

  $('.detail .grid_button').click(function() {
    $('.image_column').addClass('display_none');
    $('.grid_column').removeClass('display_none');
    $(this).removeClass('grid_button').addClass('column_button');
  });

  $('.detail .column_button').click(function() {
    $('.grid_column').addClass('display_none');
    $('.image_column').removeClass('display_none');
    $(this).removeClass('column_button').addClass('grid_button');
  });

  function vertically_center_images() {
    var images_in_works_page = $('.works_grid .contains_image img').toArray();
    var images_in_works_page_length = images_in_works_page.length;

    for (var i=0; i<images_in_works_page_length; i++) {
      var current = images_in_works_page[i];
      var current_height = $(current).height();
      var container_height = $(current).parent().height();
      var top_padding = (container_height - current_height) / 2;
      var new_container_height = container_height - top_padding;
      $(current).parent().css('padding-top', top_padding).css('height',new_container_height);
    }
  };


  vertically_center_images();

});
