/**
 * @file
 * Application javascript.
 */

$(function () {
  angular.bootstrap(document, ['footbel']);
});


$(document).foundation();

$('a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 500);
  return false;
});