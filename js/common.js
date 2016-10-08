$(document).ready(function() {
	function heightDetect(){
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	
}); 
$(window).load(function() { 
	$(".loader.inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

$(".toggle_mnu").click(function() {
	if ($(".top_mnu").is(":visible")){
	$(".top_mnu").fadeOut(600);
	}else{
	$(".top_mnu").fadeIn(600);
	};
});

$(".toggle_mnu, .mnu_item").click(function(){
	$(".sandwich").toggleClass("active");
});