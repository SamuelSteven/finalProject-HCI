// Hamburger Toogle
const menutoogle = document.querySelector('.menu-toogle input');
const nav = document.querySelector('nav ul');

menutoogle.addEventListener('click', function(){
    nav.classList.toggle('slide');
})

// weather
function showweather(){
    let morning = document.querySelector('.weather .morning');
    let afternoon = document.querySelector('.weather .afternoon');
    let evening = document.querySelector('.weather .evening');
    let night = document.querySelector('.weather .night');

    var date = new Date();
    var jam = date.getHours();

    if(6 <= jam && jam < 12){
        $('.weather .morning').addClass('coming');
        morning.setAttribute('title', 'Good Morning!');
    }

    else if(12 <= jam && jam < 17){
        $('.weather .afternoon').addClass('coming');
        afternoon.setAttribute('title', 'Good Afternoon!');  
    }

    else if(17 <= jam && jam < 19){
        $('.weather .evening').addClass('coming');
        evening.setAttribute('title', 'Good Evening!');
    }

    else if(19 <= jam || 0 <= jam || jam < 6){
        $('.weather .night').addClass('coming');
        night.setAttribute('title', 'Good Night!');
    }
}
showweather();

// Fade
$(window).scroll(function(){
    var scroll = $(this).scrollTop();

    $('.jumbotron .tilt h1').css({
        'transform': 'translate(0px,' + scroll/1.2 + '%)'
    });

    // $('.jumbotron .tilt p').css({
    //     'transform': 'translate(0px,' + scroll/0.52 + '%)'
    // });

    // Background Zoom
    $(".jumbotron ").css({
        'background-size': 100+scroll/20 + '%'
    });

    $(".service ").css({
        'background-size': 100+scroll/950 + '%'
    });

    if(scroll > $('.content').offset().top -180){
        $('.content .campus .binus').addClass('fade');
    }

    if(scroll > $('.content2').offset().top -100){
        $('.contact').addClass('fade');
    }

    else if(scroll > $('.content2').offset().top -300){
        $('.contact').removeClass('fade');
    }

    if(scroll > $('.content2').offset().top -300){
        $('.content2 .word').addClass('fade');
    }

    if(scroll > $('.content2 .image').offset().top -300){
        $('.content2 .quotes').addClass('fade');
    }

    if(scroll > $('.content').offset().top -300){
        $('.content header .about').addClass('fade');
    }

   
    if(scroll > $('.content .team').offset().top -450){
        $('.content .team .people').each(function(i){
            setTimeout(function(){
                $('.content .team .people').eq(i).addClass('coming');
            }, 270 * (i + 1));
        });
    }

    if(scroll > $('.services .picture').offset().top -450){
        $('.services .picture').each(function(i){
            setTimeout(function(){
                $('.services .picture').eq(i).addClass('coming');
            }, 270 * (i + 1));
        });
    }

    if(scroll > $('.content2 .image .images').offset().top -950){
        $('.content2 .image .images').each(function(i){
            setTimeout(function(){
                $('.content2 .image .images').eq(i).addClass('coming');
            }, 270 * (i + 1));
        });
    }
});

//Effect for text
const nama = document.querySelector('.content2 .heading');
const huruf = [...nama.textContent].map( a => {
    return `<span>${a}</span>`
}).join('');

nama.innerHTML = huruf;

// Effect Photos
// $('.team').each(function(i){
//     if((this).mouseenter({
//         $('.team .people').eq(i).addClass('effect');
//     }))
//     else if((this).mouseleave({
//         $('.team .people').eq(i).removeClass('effect');
//     }))
// });

// Skew Scroll effect
function scrollDetect(){
    var lastScroll = 0;
  
    window.onscroll = function() {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 

        if (currentScroll > 0 && lastScroll <= currentScroll){
            lastScroll = currentScroll;
            $('body .tilt').css({
                'transform': 'skew(3deg, 3deg)'
            });

            setTimeout(function(){
                $('body .tilt').css({
                    'transform': 'skew(0deg, 0deg)'
                });
            },400);

        }
        else{
            lastScroll = currentScroll;
            $('body .tilt').css({
                'transform': 'skew(-3deg, -3deg)'
            });
            setTimeout(function(){
                $('body .tilt').css({
                    'transform': 'skew(0deg, 0deg)'
                });
            },400);
        }
    };
}
  
scrollDetect();