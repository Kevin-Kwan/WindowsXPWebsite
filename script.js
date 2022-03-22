
$("head").ready(function(){
	$("a").click(function(){
		$("*").css("cursor","wait");
		$("#click")[0].play();
	}); 
});
$(window).bind("pageshow", function(event) {
    if (event.originalEvent.persisted) {
        //$("*").css("cursor","auto");
		$("*").css("cursor","default");
    }
});