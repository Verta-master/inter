jQuery(function($) {
	"use strict";

//scroll to arrow anchors

  $(".promo__next").click(function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top - 70;
    $('body,html').animate({scrollTop: top}, 400);
  });
});
