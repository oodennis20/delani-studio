$("#one").click(function() {
    $("#paragraph1").toggle(); 
    $("#one").toggle(); 
});
 $("#paragraph1").click(function() {
    $("#one").toggle();
    $("#paragraph1").toggle();
});
$("#two").click(function() {
    $("#paragraph2").toggle();
    $("#two").toggle(show); 
});
 $("#paragraph2").click(function() {
    $("#two").toggle();
    $("#paragraph2").toggle();
});
$("#three").click(function() {
    $("#paragraph3").toggle();
    $("#three").toggle(show); 
});
 $("#paragraph3").click(function() {
    $("#three").toggle();
    $("#paragraph3").toggle();
});

