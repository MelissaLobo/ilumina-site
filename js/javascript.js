
// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5000
    })
});

$(document).ready(function() {
    $('#CarouselCliente').carousel({
        interval: 5000
    })
});

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});


var contactForm = $("form#contactForm");
contactForm.submit(function(event){
	event.preventDefault();

var service_id = "gmail";
var template_id = "contato";



contactForm.find("button").text("Enviando...");
emailjs.sendForm(service_id,template_id,"contactForm")
	.then(function(){ 
  	alert("E-mail enviado com sucesso!");
  	contactForm.find("button").text("Enviado");
  }, function(err) {
     alert("Falha ao enviar e-mail!\r\n Response:\n " + JSON.stringify(err));
     contactForm.find("button").text("Enviar");
  });
return false;
});

function collapseNavbar() {
	$(".navbar").offset().top > 50 ? $(".navbar-fixed-top").addClass(
			"top-nav-collapse") : $(".navbar-fixed-top").removeClass(
			"top-nav-collapse")
}

$(window).scroll(collapseNavbar), $(document).ready(collapseNavbar),
		$(function() {
			$("a.page-scroll").bind("click", function(e) {
				var t = $(this);
				$("html, body").stop().animate({
					scrollTop : $(t.attr("href")).offset().top
				}, 1500, "easeInOutExpo"), e.preventDefault()
			})
		}), $(".navbar-collapse ul li a").click(function() {
			$(this).closest(".collapse").collapse("toggle")
		});
