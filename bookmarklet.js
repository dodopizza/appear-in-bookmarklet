if ( window.location.href.indexOf('appear.in') > 0 ){
	$(".video-space-header, .VideoToolbar, .bottom-right-button-group, .chat-open-button").remove();
	$("main.supersized .video-wrapper, main.video-space .video-wrapper").css("margin-bottom", "0px");
	window.dispatchEvent(new Event('resize'));
} else {
	window.location.href = "https://appear.in/vitalyu?skipCamPrimer"
}
