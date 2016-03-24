$(document).ready(function() {
  // Instructions
  function playInstructionsVideo() {
    var $screenshotVid = $(".screenshot-vid");
    var $drawingVid = $(".drawing-vid");
    var $basketballVid = $(".basketball-vid");

    setTimeout(function() {
      $screenshotVid[0].play();
      setTimeout(function() {
        $screenshotVid.fadeOut();
        $drawingVid[0].play();
        setTimeout(function() {
          $drawingVid.fadeOut();
          $basketballVid[0].play();
        }, 12000);
      }, 3000);
    }, 1000);
  }

  $(window).scroll(function() {
    var hT = $('.instructions').offset().top,
       hH = $('.instructions').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       console.log('you have scrolled to instructions');
       playInstructionsVideo();
   }
  });

  // Examples
  var $examplePhones = $(".example-phone");
  $examplePhones.hover(function() {
    $examplePhones.removeClass("active");
    var $self = $(this);

    $self.addClass("active");
    var $video = $self.find("video");
    setTimeout(function() {
      $video[0].play();
    }, 250);
  });

  $examplePhones.mouseleave(function() {
    var $self = $(this);
    $self.removeClass("active");
    var $video = $self.find("video");
    setTimeout(function() {
      $video[0].pause();
    }, 250);
  });
});
