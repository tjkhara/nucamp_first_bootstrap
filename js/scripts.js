$(function () {
  // Initializes the carousel with an optional options object and starts cycling through items.
  $(".carousel").carousel({ interval: 2000 });
  // Select the carousel button id and when clicked

  $("#carouselButton").click(function () {
    // if the children with class of i of that selected #carouselButton show pause (that means mode is play)
    if ($("#carouselButton").children("i").hasClass("fa-pause")) {
      // Change it to pause (pause the slider)
      $(".carousel").carousel("pause");
      // Remove the pause icon
      $("#carouselButton").children("i").removeClass("fa-pause");
      // Add the play icon
      $("#carouselButton").children("i").addClass("fa-play");
    } else {
      // if icon is play, mode is pause
      // When clicked we need to start playing
      $(".carousel").carousel("cycle");
      // remove the play icon
      $("#carouselButton").children("i").removeClass("fa-play");
      // add the pause icon
      $("#carouselButton").children("i").addClass("fa-pause");
    }
  });
});
