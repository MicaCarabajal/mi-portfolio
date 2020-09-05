//para el menú
$(document).ready(function(){ 
   $('#menu').hide();
    $('.abrir').on('click',function(){
       $('#menu').show('fazt');
       $('.abrir').hide('fazt');
    });  
    $('.cerrar').on('click',function(){
      $('#menu').hide('fazt');
      $('.abrir').show('fazt');
   });
   $('li').on('click',function(){
    $('#menu').hide();
    $('.abrir').show('fazt');
   });
 });


//para las particulas
particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 2000
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 1,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 0,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 10,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 800,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 800,
        "size": 80,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);
//efecto para la escritura animada
const typed = new Typed('.typed', {
  strings:['<i class="texto-typed">Soy Micaela Carabajal.<br>Desarrolladora FrontEnd Trainee / Junior.</i>'],
  typeSpeed: 40, // Velocidad en mlisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html' // 'html' o 'null' para texto sin formato
});
//efecto para el slide de img
var swiper = new Swiper('.swiper-container', {
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
//efecto para el slide de videos
var swiper = new Swiper('.swiper-containerr', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
//efecto para que se deslice despacio
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
	  e.preventDefault();

	  document.querySelector(this.getAttribute('href')).scrollIntoView({
		behavior: 'smooth'
	  });
	});
});
//efecto parallax
$(document).ready(function(){  //se hace para que el codigo cargue hasta que haya finalizado cargar la pagina
  $(window).scroll(function(){//detecta cuando el usuario mueve el scroll
      var barra = $(window).scrollTop(); //posicion del scroll
      var posicion = barra * 0.10; //el movimiento que va a tener el fondo
      $('body').css({
          'background-position': '0 -' + posicion + 'px'//cuando queremos modificar el B-P cuando hagamos scroll. El 0 seria el valor de izq y der, el - seria para que vaya de arriba para abajo
          //background-position: 0 -100px; es lo mismo que escribimos arriba
          // el 0 - (el menos lo que hace es que vaya de abajo hacia arriba, si lo quitamos va ir de arriba para abajo)
      });
  });   
});

new WOW().init();