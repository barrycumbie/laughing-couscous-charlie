$(function () {
  console.log("bring the wow");

  // $("#draggable").draggable();

  var $drag_counter = $("#event-drag"),
    counts = 0;

  $("#resetGame").click(function () {
    console.log("clicked button");
    counts = 0;
    $("span.count").text(counts);
    $("#gameOutput").text("");
  });

  $("#draggable").draggable({
    drag: function () {
      counts++;
      updateCounterStatus($drag_counter, counts);
    },
  });

  function updateCounterStatus($event_counter, new_count) {
    //todo: if more than 174, then wow. if not, no wow.

    var game_msg = "";

    if (new_count < 174) {
      game_msg = "keep trying there good buddy";
    } else if (new_count == 174) {
      game_msg = "super secret wunderfull game winner";
    } else {
      game_msg = "you alirght with me";
      $("img").attr(
        "src",
        "https://user-images.githubusercontent.com/22795694/215548035-c30c0f77-24f0-4982-a2a8-cbe231ef1ecd.jpeg"
      );
    }

    $("#gameOutput").text(game_msg);
    $("span.count", $event_counter).text(new_count);
  }
});
