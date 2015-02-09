jQuery(document).ready(function($){

	if( $('.flexslider').length ){
	$('.flexslider').flexslider({
		animation: 'fade',
		slideshow: true,
		animationLoop: true,
		controlNav: false,
		animationLoop: true,
		});
	}
	
	var Duration = 250; //time in milliseconds

	$('p a').hover(function() {
		$(this).find('.arrow').animate({ marginLeft: '3px' }, Duration);
	}, function() {
		$(this).find('.arrow').animate({ marginLeft: '0px' }, Duration);           
	});
	
	
	
	// initiate googlemaps					
    
	"use strict";

 $('#jd_contactform').live('submit', function(e){
	
		e.preventDefault();
		var thisform = this;
		var fields = $(this).serialize();
		var url= $(this).attr('action');
		$.ajax({
			url: url,
			type: 'POST',
			data: fields,
			success:function(res){
				$('.msgs', thisform).html(res);
			}
		});
	});
	


});