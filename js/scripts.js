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
    $("#two").toggle(); 
});
 $("#paragraph2").click(function() {
    $("#two").toggle();
    $("#paragraph2").toggle();
});
$("#three").click(function() {
    $("#paragraph3").toggle();
    $("#three").toggle(); 
});
 $("#paragraph3").click(function() {
    $("#three").toggle();
    $("#paragraph3").toggle();
});
//for hoover effects on the images in portfolio
$("#image1").mouseover(function(){
    $(".one").show();
    }).mouseout(function(){
      $(".one").hide();
   });
  $("#image2").mouseover(function(){
    $(".two").show();
    }).mouseout(function(){
      $(".two").hide();
  });
  $("#image3").mouseover(function(){
    $(".three").show();
    }).mouseout(function(){
      $(".three").hide();
  });
  $("#image4").mouseover(function(){
    $(".four").show();
    }).mouseout(function(){
      $(".four").hide();
  });
  $("#image5").mouseover(function(){
    $(".five").show();
    }).mouseout(function(){
      $(".five").hide();
  });
  $("#image6").mouseover(function(){
    $(".six").show();
    }).mouseout(function(){
      $(".six").hide();
  });
  $("#image7").mouseover(function(){
    $(".seven").show();
    }).mouseout(function(){
      $(".seven").hide();
  });
  $("#image8").mouseover(function(){
    $(".eight").show();
    }).mouseout(function(){
      $(".eight").hide();
  }); 
  
  $('#contactus-form').bind('submit', function(event) {

    event.preventDefault();
  
    var name  = $('[name="fist-name"]').val();
    var email = $('[name="email"]').val();
    var message = $('[name="message"]').val();
    var url =   "https://us20.api.mailchimp.com/2.0/lists/subscribe.json?"
              +  "apikey=509f1576565b913cce3554b7c756d303-us20&id=3563379fa3"  
              +  "&email[email]=" + email 
              +  "&merge_vars[NAME]=" + name 
              +  "&merge_vars[MESSAGE]=" + message
              +  "&double_optin=true" 
              +  "&send_welcome=true";
    $.ajax({
        type: "POST",
        url: url,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
  
        success: function(data) {
          $('#contactus-form').html(name + " we have received your message. Thank you for reaching out to us.");
          alert("success");
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(errorThrown);
        }
    }); 
    alert(name + " we have received your message. Thank you for reaching out to us.")
  });  
