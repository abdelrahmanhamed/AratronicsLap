function closeForm() {

  $('.cd-popup').removeClass('is-visible');
}

$(document).ready(function($) {

  /* ------------------------- */
  /* open Form Interactions */
  /* ------------------------- */
  $('#open').on('click', function(event) {
    event.preventDefault();

    $('.open').addClass('is-visible');
  });
  $('#open2').on('click', function(event) {
    event.preventDefault();

    $('.open2').addClass('is-visible');
  });
  //close popup when clicking x or off popup
  $('.cd-popup').on('click', function(event) {
    if ($(event.target).is('.cd-popup')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });

  //close popup when clicking the esc keyboard button
  $(document).keyup(function(event) {
    if (event.which == '27') {
      $('.cd-popup').removeClass('is-visible');
    }
  });
});