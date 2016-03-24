$(document).ready(function() {
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
