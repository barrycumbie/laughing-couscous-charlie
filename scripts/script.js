$(function () {
  console.log("bring the wow");

  // $("#draggable").draggable();

  counts = 0;

  $("#resetGame").click(function () {
    console.log("clicked button");
    counts = 0;

    $("span.count").text(counts);
    $("#gameOutput").text("");

    $("#draggable").fadeOut(20).animate({ left: 0 }).fadeIn(20);
  });

  $("#draggable").draggable({
    containment: "#doge-row",
    drag: function () {
      counts++;
      updateCounterStatus(counts);
    },
  });

  function updateCounterStatus(new_count) {
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

    console.table("bout to update count", new_count);

    $("#gameOutput").text(game_msg);
    $("span.count").text(new_count);
  }
});
