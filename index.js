// $(document).ready(function(){
// $("li").filter(":even").css("background-color", "red");
// // });

// $( "#target" ).click(function() {
//   alert( "Handler for .click() called." );
// });

$(function(){

  //what to do when li is clicked
 $("li").click(function(){
    //  $(this).css("background-color", "red").html("Clicked");
    $(this).toggleClass("background");
 });
});
