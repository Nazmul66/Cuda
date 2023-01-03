
/// jquery raw code

$(document).ready(function(){

  $('#allBtn').click(function(){
  	$('#appDesign').show(1000);
  	$('#webDesign').show(1000);
  	$('#iconDesign').show(1000);
  	$('#cmsDesign').show(1000);

  });

  $('#webBtn').click(function(){
  	$('#appDesign').hide(1000);
  	$('#webDesign').show(1000);
  	$('#iconDesign').hide(1000);
  	$('#cmsDesign').hide(1000);

  });

  $('#appBtn').click(function(){
  	$('#appDesign').show(1000);
  	$('#webDesign').hide(1000);
  	$('#iconDesign').hide(1000);
  	$('#cmsDesign').hide(1000);

  });

  $('#iconBtn').click(function(){
  	$('#appDesign').hide(1000);
  	$('#webDesign').hide(1000);
  	$('#iconDesign').show(1000);
  	$('#cmsDesign').show(1000);

  });

}); 



$(document).ready(function(){

	$(window).scroll(function(){
	  if($(this).scrollTop() > 100){
		$(".fa-arrow-up").fadeIn();
	  }
	  else{
		$(".fa-arrow-up").fadeOut();
	  }
	});
  
	$(".fa-arrow-up").click(function(){
	  $('body').animate({
		scrollTop:0
	  }, 1000);
  
	});
  
  });