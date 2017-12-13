$(document).ready(function(){
  $("#photo2, #photo3, #photo4, #photo5").hide();
  $("h1").html("<strong>Bones</strong>");
  $("#first").css({"color": "#fff"});
  $("#second, #third, #fourth, #fifth").css({"color": "#000"});

	$("#first").click(function(){
		$("#photo1").show();
    $("h1").html("<strong>Bones</strong>");
    $("#first").css({"color": "#fff"});
    $("#second, #third, #fourth, #fifth").css({"color": "#000"});

		$("#photo2, #photo3, #photo4, #photo5").hide();
	});
	$("#second").click(function(){
		$("#photo2").show();
    $("h1").html("<strong>Criminal Minds</strong>");
    $("#second").css({"color": "#fff"});
    $("#first, #third, #fourth, #fifth").css({"color": "#000"});
		
		$("#photo1, #photo3, #photo4, #photo5").hide();
	});
	$("#third").click(function(){
		$("#photo3").show();
    $("h1").html("<strong>Castle</strong>");
    $("#third").css({"color": "#fff"});
    $("#first, #second, #fourth, #fifth").css({"color": "#000"});
		
		$("#photo1, #photo2, #photo4, #photo5").hide();
	});
	$("#fourth").click(function(){
		$("#photo4").show();
    $("h1").html("<strong>CSI Miami</strong>");
    $("#fourth").css({"color": "#fff"});
    $("#first, #second, #third, #fifth").css({"color": "#000"});
		
		$("#photo1, #photo2, #photo3, #photo5").hide();
	});
	$("#fifth").click(function(){
		$("#photo5").show();
    $("h1").html("<strong>Sherlock</strong>");
    $("#fifth").css({"color": "#fff"});
    $("#first, #second, #third, #fourth").css({"color": "#000"});
		
		$("#photo1, #photo2, #photo3, #photo4").hide();
	});
  var images = [];
  $('#photo-box img').each(function(){
      images.push($(this));    
  });
  var imgcount = images.length;
  $("img").hide();
  $("img").first().show();
  var currentItem = 0;

  $('#next').click(function(){
          $("img").hide();
          currentItem++;
          images[currentItem%5].show();        
  });

  $('#prev').click(function(){
          $("img").hide();
         currentItem--;
         if(currentItem < 0)
             currentItem = imgcount-1;
         images[currentItem%5].show();
  });

});