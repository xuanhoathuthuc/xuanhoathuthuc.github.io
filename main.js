// Search on page

//==================================================


// Change color on scroll
$(window).scroll(function(){
	$('header nav').toggleClass('scrolled', $(this).scrollTop() > 10);
});

// Make spin loading

var timer;

function loadContainer() {
	$("#menu-container").attr("style","display:none")
	$("#loader").attr("style","display:block")
	timer = setTimeout(showPage, 1500);
}

function showPage() {
	$("#menu-container").attr("style","display:block")
	$("#loader").attr("style","display:none")
}

