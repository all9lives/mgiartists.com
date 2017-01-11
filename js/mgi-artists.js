$(document).ready(function(){
	
	// Office Locations

	

	$("ul.locations li").click(function () {
	
		$("ul.locations li ul").slideUp("slow");
		$("ul.locations li h3").removeClass("underline");
		$("ul",this).slideDown("slow");
		$("ul li",this).css("display","none").delay(500).fadeIn("slow");
    	$("h3", this).addClass("underline");							   
	});	
	

	
	// Colorbox
	
	$(".contactBox").colorbox({width:"460px", height:"500px", iframe:true, scrolling:false});
	
});