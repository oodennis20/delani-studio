$("#one").click(function() {
    $("#paragraph1").toggle(); 
    $("#one").toggle(hide); 
});
 $("#paragraph1").click(function() {
    $("#one").toggle();
    $("#paragraph1").toggle(hide);
});
$("#two").click(function() {
    $("#paragraph2").toggle();
    $("#two").toggle(show); 
});
 $("#paragraph2").click(function() {
    $("#two").toggle();
    $("#paragraph").toggle();
});
$("#three").click(function() {
    $("#paragraph3").toggle();
    $("#three").toggle(show); 
});
 $("#paragraph3").click(function() {
    $("#three").toggle();
    $("#paragraph3").toggle();
});
$(document).ready(function() { 
    $(".col-sm-3").hover(function() { 
        $(this).css("hide"); 
    }, function() { 
        $(this).css("unhide"); 
    }); 
}); 
