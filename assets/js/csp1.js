
// Pre-loading animation
$(window).on('load', function() { 
  $('#status').delay(550).fadeOut(); 
  $('#preloader').delay(550).fadeOut('slow'); 
  $('body').delay(550).css({'overflow':'auto'});
})

// Job description effects
document.addEventListener('DOMContentLoaded',function(event){
// array with texts to type in typewriter

  var dataText = [ "Full Stack Web Developer.", "Mainframe Application Engineer.", "Technical Lead.", "Natural Language Processing Enthusiast."]
                              
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
      document.querySelector("h3").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
          }, 100);
        }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
        setTimeout(fnCallback, 700);
     }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
      if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
            }, 200);
          }
  
          if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function(){
              StartTextAnimation(i + 1);
                });
            }
    }

    // start the text animation
    StartTextAnimation(0);
});

// Portefeuille JS
var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
});

// Language Selector Animation
$('[lang="en"]').hide();
$('[lang="de"]').show();
$('[class="message text-center lang-de"]').hide();
$('[class="message text-center lang-en"]').hide();

$(".language-dropdown").click(function(){
    console.log("clicked");
    if($(".lang-flag").hasClass('lang-en')){
      console.log("lang-en");
      $(".language-dropdown").find(".lang-flag").addClass("lang-de").removeClass("lang-en");
      $("#lang_selected").html("<p>EN</p>")
      $('[lang="de"]').hide();
      $('[class="animation"]').hide();
      $('[class="message text-center lang-de"]').hide();
      $('[class="message text-center lang-en"]').hide();
      $('[lang="en"]').show();
    }else if($(".lang-flag").hasClass('lang-de')){
      console.log("lang-de");
      $(".language-dropdown").find(".lang-flag").addClass("lang-en").removeClass("lang-de");
      $("#lang_selected").html("<p>DE</p>")
      $('[lang="en"]').hide();
      $('[class="animation"]').hide();
      $('[class="message text-center lang-de"]').hide();
      $('[class="message text-center lang-en"]').hide();
      $('[lang="de"]').show();
    }
});


// Email function
$('[class="animation"]').hide();
$('[class="message text-center lang-de"]').hide();
$('[class="message text-center lang-en"]').hide();

(function() {
  emailjs.init("user_4fJ7j9ksFyLakJ2iM77Br");
})();

window.onload = function() {
  document.getElementById('form').addEventListener('submit', function(event) {
    $('[id="btn-submit-de"]').hide();
    $('[id="btn-submit-en"]').hide();
    $('[class="animation"]').show();
    event.preventDefault();
    this.contact_number.value = Math.random() * 100000 | 0;


    // emailjs.sendForm('service_dad9hgn', 'template_2ywna9h', 'form', 'user_4fJ7j9ksFyLakJ2iM77Br')
    //   .then(function() {
    //     console.log('SUCCESS!');
    //     if($(".lang-flag").hasClass('lang-en')){
    //       $('[class="message text-center lang-de"]').delay(550).fadeIn(); 
    //     } else {
    //       $('[class="message text-center lang-en"]').delay(550).fadeIn(); 
    //     }
    //   }, function(error) {
    //     console.log('FAILED...', error);
    //   });
    // });

    if($(".lang-flag").hasClass('lang-en')){ 
      emailjs.sendForm('service_dad9hgn', 'template_ha0htqo', 'form', 'user_4fJ7j9ksFyLakJ2iM77Br')
        .then(function() {
          $('[class="message text-center lang-de"]').fadeIn(); 
        }, function(error) {
          console.log('FAILED...', error);
      });
    } else {
      emailjs.sendForm('service_dad9hgn', 'template_2ywna9h', 'form', 'user_4fJ7j9ksFyLakJ2iM77Br')
        .then(function() {
          $('[class="message text-center lang-en"]').fadeIn(); 
        }, function(error) {
          console.log('FAILED...', error);
      });
    }

  });
}

// Forms validation
const form = document.getElementById('form');
form.addEventListener("input",() => {
  
  var emailRegex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

  if($(".lang-flag").hasClass('lang-en')){ 

    if(document.getElementById("name-input-de").value.length > 0 &&
    document.getElementById("email-input-de").value.length > 0 &&
    document.getElementById("message-input-de").value.length > 0 &&
    emailRegex.test(document.getElementById("email-input-de").value)) {

      document.getElementById('btn-submit-de').disabled = false;
      console.log("All inputs are correct-de")

    } else { 
      document.getElementById('btn-submit-de').disabled = true;
    }
  
  } else {
    if(document.getElementById("name-input-en").value.length > 0 &&
    document.getElementById("email-input-en").value.length > 0 &&
    document.getElementById("message-input-en").value.length > 0 &&
    emailRegex.test(document.getElementById("email-input-en").value)) {

      document.getElementById('btn-submit-en').disabled = false;
      console.log("All inputs are correct-en")

    } else { 
      document.getElementById('btn-submit-en').disabled = true;
    }
  }

});