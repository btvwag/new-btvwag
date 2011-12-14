$(function() {
  $("#down").live("click", function() {
    $($(this).parent().find(".job-content")[0]).slideToggle("fast");
    $(this).attr("id", "up");
    $($(this).children()[0]).html("&#8593;")
  });

  $("#up").live("click", function() {
    $($(this).parent().find(".job-content")[0]).slideToggle("fast");
    $($(this).children()[0]).html("&#8595;")
    $(this).attr("id", "down");
  });
});
