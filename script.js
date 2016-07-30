function closeForm() {

  $('.cd-popup').removeClass('is-visible');
}

$(document).ready(function($) {

  /* ------------------------- */
  /* open Form Interactions */
  /* ------------------------- */
  $('#go1').on('click', function(event) {
    event.preventDefault();

    $('#pdf1').addClass('pdfafter');
    $('#go1').addClass('goafter');
    $('#return1').addClass('returnafter');
    $('#tooltip1').addClass('tooltipafter');
  });
  $('#return1').on('click', function(event) {
    event.preventDefault();

    $('#pdf1').removeClass('pdfafter');
    $('#go1').removeClass('goafter');
    $('#return1').removeClass('returnafter');
    $('#tooltip1').removeClass('tooltipafter');
  });

  $('#go2').on('click', function(event) {
    event.preventDefault();

    $('#pdf2').addClass('pdfafter');
    $('#go2').addClass('goafter');
    $('#return2').addClass('returnafter');
    $('#tooltip2').addClass('tooltipafter');
  });
  $('#return2').on('click', function(event) {
    event.preventDefault();

    $('#pdf2').removeClass('pdfafter');
    $('#go2').removeClass('goafter');
    $('#return2').removeClass('returnafter');
    $('#tooltip2').removeClass('tooltipafter');
  });
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