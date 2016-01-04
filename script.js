$(document).ready(function(){
  $("body").append("<button id=\"reset\" class=\"pretty\" type=\"button\">Reset</button>");

  $("body").append("<div class=\"boxcontainer\"></div>");
  for (i=0;i<16;i++){
    for (j=0;j<16;j++){
      $(".boxcontainer").append("<div class=\"box\"></div>");
    }
    $(".boxcontainer").append("<br>");
  }

//Current Issues:
//The remove works correctly, but it's not properly resizing .box divs.
  $("#reset").click(
    function(){
      var dimensions = prompt("How many boxes? (Max size 42)", "16");
      if (Number.isInteger(dimensions)){
        window.alert("Invalid: Integers only.");
      }
      else{
        $(".box").remove();
        $("br").remove();
        var newBoxSize = (800/dimensions);
        for (i=0;i<dimensions;i++){
          for (j=0;j<dimensions;j++){
            $(".boxcontainer").append("<div class=\"box\"></div>");
          }
          $(".boxcontainer").append("<br>");
        }
        $(".box").height(newBoxSize).width(newBoxSize);
        $(".box").hover(
          function(){
            $(this).css("background-color", "#3399ff");
          }
        );
      }
    }
  )

  $(".box").hover(
    function(){
      $(this).css("background-color", "#3399ff");
    }
  );

});
