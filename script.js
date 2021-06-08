$(document).ready(function () {
  $("#video").click(function () {
    $("#video").addClass("active");
    $("#photography, #social, #pr, #radio").removeClass("active");
    $(".video-text").css("display", "block");
    $(".photography-text, .social-text, .pr-text, .radio-text").css(
      "display",
      "none"
    );
  });
  $("#photography").click(function () {
    $("#photography").addClass("active");
    $("#video, #social, #pr, #radio").removeClass("active");
    $(".photography-text").css("display", "block");
    $(".video-text, .social-text, .pr-text, .radio-text").css(
      "display",
      "none"
    );
  });
  $("#social").click(function () {
    $("#social").addClass("active");
    $("#video, #photography, #pr, #radio").removeClass("active");
    $(".social-text").css("display", "block");
    $(".video-text, .photography-text, .pr-text, .radio-text").css(
      "display",
      "none"
    );
  });
  $("#pr").click(function () {
    $("#pr").addClass("active");
    $("#video, #photography, #social, #radio").removeClass("active");
    $(".pr-text").css("display", "block");
    $(".video-text, .photography-text, .social-text, .radio-text").css(
      "display",
      "none"
    );
  });
  $("#radio").click(function () {
    $("#radio").addClass("active");
    $("#video, #photography, #social, #pr").removeClass("active");
    $(".radio-text").css("display", "block");
    $(".video-text, .photography-text, .social-text, .pr-text").css(
      "display",
      "none"
    );
  });
});
