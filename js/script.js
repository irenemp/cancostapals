
// menu desplegable


$(document).ready(function() {

    $('span').on('click', mostrarMenu);

  });

  function mostrarMenu(){


    $('.menu').toggleClass('abierto');

  }



//menu que se esconde si no hace scroll
  let ultimoScroll=0;

  			$(window).on("scroll", function(){

  			let scroll = $(window).scrollTop();


  			if (scroll > ultimoScroll) {

  				$("span").addClass("oculto");

  			}else{
  				 $("span").removeClass("oculto");
  				}

  			ultimoScroll = scroll;


  			});


//overlay
$(window).on("load", inicio);

		function inicio(){


			$('.overlay').fadeOut(1000);

		}
