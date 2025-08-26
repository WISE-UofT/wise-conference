jQuery(document).ready(function($) {

    // Add a dot for each slide
    var numSlides = $('.carousel-slide').length;
    for (var i = 0; i < numSlides; i++) {
        $('.carousel-dots').append('<div class="carousel-dot"></div>');
    }

    // Set the first dot as active
    $('.carousel-dot:first').addClass('active');

    // Function to go to a specific slide
    function goToSlide(index) {
        $('.carousel-slide').hide();
        $('.carousel-slide:eq(' + index + ')').show();
        $('.carousel-dot').removeClass('active');
        $('.carousel-dot:eq(' + index + ')').addClass('active');
    }

    // Handle dot click event using event delegation
    $('.carousel-dots').on('click', '.carousel-dot', function () {
        clearInterval(slideInterval); // Stop the timer
        var index = $(this).index();
        goToSlide(index);
        // Restart the timer
        slideInterval = setInterval(nextSlide, 3000); // Change 3000 to the desired interval in milliseconds
    });

    // Function to go to the next slide
    function nextSlide() {
        var currentIndex = $('.carousel-slide:visible').index();
        var nextIndex = (currentIndex + 1) % numSlides;
        goToSlide(nextIndex);
    }

    // Set a timer to automatically advance the carousel
    var slideInterval = setInterval(nextSlide, 3000); // Change 3000 to the desired interval in milliseconds

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // Preloader
    $(window).on('load', function() {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function() {
                $(this).remove();
            });
        }
    });

    // Header fixed on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    }

    // Real view height for mobile devices
    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#intro').css({
            height: $(window).height()
        });
    }

    // Initiate the wowjs animation library
    new WOW().init();

    // Initialize Venobox
    $('.venobox').venobox({
        bgcolor: '',
        overlayColor: 'rgba(6, 12, 34, 0.85)',
        closeBackground: '',
        closeColor: '#fff'
    });

    // Initiate superfish on nav menu
    $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 400
    });

    // Mobile Navigation
    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

        $(document).on('click', '.menu-has-children i', function(e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("fa-chevron-up fa-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').toggle();
        });

        $(document).click(function(e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }

    // Smooth scroll for the menu and links with .scrollto classes
    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 0;

                if ($('#header').length) {
                    top_space = $('#header').outerHeight();

                    if (!$('#header').hasClass('header-fixed')) {
                        top_space = top_space - 20;
                    }
                }

                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
                return false;
            }
        }
    });

    // gallery carousel (uses the Owl Carousel library)
    $(".gallery-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: false,
        center: true,
        responsive: {
            0: {
                items: 0
            },
            250: {
                items: 1
            },
            500: {
                items: 2
            },
            600: {
                items: 3
            }
        }
    });

    // Buy tickets select the ticket type on click
    $('#buy-ticket-modal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget);
        var ticketType = button.data('ticket-type');
        var modal = $(this);
        modal.find('#ticket-type').val(ticketType);
    })

    /* ======= Countdown ========= */
	// set the date we're counting down to
    var target_date = new Date("Jan 25, 2025").getTime();
     
    // variables for time units
    var days, hours, minutes, seconds;
     
    // get tag element
    // REPLACE IT WITH THIS
var countdown = document.getElementById("countdown-box");
// Only run the countdown code if the element exists on the page
if (countdown) {
    var days_span = document.createElement("SPAN");
    days_span.className = 'days';
    countdown.appendChild(days_span);
    var hours_span = document.createElement("SPAN");
    hours_span.className = 'hours';
    countdown.appendChild(hours_span);
    var minutes_span = document.createElement("SPAN");
    minutes_span.className = 'minutes';
    countdown.appendChild(minutes_span);
    var secs_span = document.createElement("SPAN");
    secs_span.className = 'secs';
    countdown.appendChild(secs_span);

    // update the tag with id "countdown" every 1 second
    setInterval(function () {
        // ... (the rest of the countdown code stays the same inside this block)
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
        
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;
        
        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
        
        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);
        
        days_span.innerHTML = '<span class="number">' + days + '</span>' + '<span class="unit">Days</span>';
        hours_span.innerHTML = '<span class="number">' + hours + '</span>' + '<span class="unit">Hrs</span>';
        minutes_span.innerHTML = '<span class="number">' + minutes + '</span>' + '<span class="unit">Mins</span>';
        secs_span.innerHTML = '<span class="number">' + seconds + '</span>' + '<span class="unit">Secs</span>';
    }, 1000);
}
     
    // update the tag with id "countdown" every 1 second
    setInterval(function () {
     
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
     
        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;
         
        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
         
        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);
         
        // format countdown string + set tag value.
        days_span.innerHTML = '<span class="number">' + days + '</span>' + '<span class="unit">Days</span>';
        hours_span.innerHTML = '<span class="number">' + hours + '</span>' + '<span class="unit">Hrs</span>';
        minutes_span.innerHTML = '<span class="number">' + minutes + '</span>' + '<span class="unit">Mins</span>';
        secs_span.innerHTML = '<span class="number">' + seconds + '</span>' + '<span class="unit">Secs</span>'; 
     
    }, 1000);

    /**Testimonials slider**/
    new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
    delay: 5000,
    disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
    },
    breakpoints: {
    320: {
        slidesPerView: 1,
        spaceBetween: 20
    },

    1200: {
        slidesPerView: 3,
        spaceBetween: 20
    }
    }
    });
        // --- Recap data -------------------------------------------------------------

    // --- Recap photos by year (explicit list) ---
const PHOTOS_BY_YEAR = {
  "2023": [
    "img/recap/2023/IMG_4461.JPG",
    "img/recap/2023/IMG_4507.JPG",
    "img/recap/2023/IMG_4798.JPG",
    "img/recap/2023/IMG_4800.JPG",
    "img/recap/2023/IMG_4880.JPG",
    "img/recap/2023/IMG_4980.JPG",
    "img/recap/2023/IMG_4994.JPG"
  ],
  "2024": [
    "img/recap/2024/biotech-panel.webp",
    "img/recap/2024/cochairs.webp",
    "img/recap/2024/competition1.webp",
    "img/recap/2024/competition2.webp",
    "img/recap/2024/competition3.webp",
    "img/recap/2024/fair1.webp",
    "img/recap/2024/fair2.webp",
    "img/recap/2024/fair3.webp",
    "img/recap/2024/fireside.webp",
    "img/recap/2024/olivieri.webp",
    "img/recap/2024/space-panel.webp",
    "img/recap/2024/workshop.webp"
  ]
};

        const KEYNOTE_BY_YEAR = {
    "2023": [
        {
        name: "Dr. Jane Doe",
        title: "VP of Research, Example AI",
        img: "img/recap/2023/IMG_4461.jpg",
        bio: "ML researcher focused on multimodal systems and AI safety."
        },
        {
        name: "Alex Nguyen",
        title: "Founder, DataBeam",
        img: "img/recap/2023/IMG_4461.jpg",
        bio: "Entrepreneur building data platforms for climate analytics."
        }
    ],
    "2024": [
        {
        name: "Priya Shah",
        title: "Senior SWE, SpaceVision",
        img: "img/recap/2023/IMG_4461.jpg",
        bio: "Works on 3D perception and spatial computing."
        },
        {
        name: "Miguel García",
        title: "Head of Product, Quantis",
        img: "img/recap/2023/IMG_4461.jpg",
        bio: "Leads product for responsible AI and model governance."
        }
    ]
    };


    // --- Helpers ---------------------------------------------------------------

    function buildPhotoSlides(swiperEl, urls) {
    const wrap = swiperEl.querySelector('.swiper-wrapper');
    wrap.innerHTML = '';
    urls.forEach(src => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `<img src="${src}" alt="Recap photo" loading="lazy">`;
        wrap.appendChild(slide);
    });
    }

    function buildSpeakerSlides(swiperEl, speakers) {
    const wrap = swiperEl.querySelector('.swiper-wrapper');
    wrap.innerHTML = '';
    speakers.forEach(s => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
        <div class="card h-100">
            <img class="card-img-top" src="${s.img}" alt="${s.name}">
            <div class="card-body">
            <h5 class="card-title" style="text-align:center;">${s.name}</h5>
            <p class="card-text" style="text-align:center;">${s.title || ''}</p>
            ${s.bio ? '<p class="card-text" style="font-size: 0.95rem;">' + s.bio + '</p>' : ''}
            </div>
        </div>`;
        wrap.appendChild(slide);
    });
    }

// Minimal Swiper init
function initSwiper(swiperEl) {
  return new Swiper(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    pagination: { el: swiperEl.querySelector('.swiper-pagination'), clickable: true },
    navigation: {
      nextEl: swiperEl.querySelector('.swiper-button-next'),
      prevEl: swiperEl.querySelector('.swiper-button-prev')
    },
    breakpoints: { 576: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }
  });
}

// Build slides
function buildSpeakerSlides(swiperEl, speakers) {
  const wrap = swiperEl.querySelector('.swiper-wrapper');
  wrap.innerHTML = '';
  speakers.forEach(s => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
      <div class="card h-100">
        <img class="card-img-top" src="${s.img}" alt="${s.name}">
        <div class="card-body">
          <h5 class="card-title" style="text-align:center;">${s.name}</h5>
          <p class="card-text" style="text-align:center;">${s.title || ''}</p>
          ${s.bio ? '<p class="card-text" style="font-size:0.95rem;">' + s.bio + '</p>' : ''}
        </div>
      </div>`;
    wrap.appendChild(slide);
  });
}

function imgExists(url) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

async function listImagesFromFolder(folder) {
  try {
    const res = await fetch(`${folder}/index.json`, { cache: 'no-store' });
    if (res.ok) {
      const arr = await res.json();
      return arr.map(name => `${folder}/${name}`);
    }
  } catch (_) {}
  const candidates = PHOTO_FALLBACK.map(name => `${folder}/${name}`);
  const exists = await Promise.all(candidates.map(imgExists));
  return candidates.filter((_, i) => exists[i]);
}

function buildPhotoSlides(swiperEl, urls) {
  const wrap = swiperEl.querySelector('.swiper-wrapper');
  wrap.innerHTML = '';
  urls.forEach(src => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `<img src="${src}" alt="Recap photo" loading="lazy">`;
    wrap.appendChild(slide);
  });
}

// Mount both carousels inside one panel (call on first open)
async function mountRecap(panelEl) {
  // Speakers
  const speakersSwiper = panelEl.querySelector('.recap-speakers-swiper');
  if (speakersSwiper && !speakersSwiper._swiper) {
    const year = String(speakersSwiper.dataset.year);
    buildSpeakerSlides(speakersSwiper, KEYNOTE_BY_YEAR[year] || []);
    speakersSwiper._swiper = initSwiper(speakersSwiper);
  }

  // Photos
  const photosSwiper = panelEl.querySelector('.recap-photos-swiper');
  if (photosSwiper && !photosSwiper._swiper) {
    const year = String(photosSwiper.closest('.recap-panel').dataset.year);
    const urls = PHOTOS_BY_YEAR[year] || [];
    buildPhotoSlides(photosSwiper, urls);
    photosSwiper._swiper = initSwiper(photosSwiper);
  }
}

// Robust expand/collapse (prevents double toggle)
$(document).on('click', '.recap-toggle', function (e) {
  e.preventDefault();
  e.stopPropagation();

  const $btn    = $(this);
  const panelId = $btn.attr('aria-controls');
  const $panel  = $('#' + panelId);

  if ($panel.data('animating')) return;

  const opening = $panel.is(':hidden') || $panel.is('[hidden]');

  if (opening) {
    $btn.attr('aria-expanded', 'true');
    $panel.removeAttr('hidden').stop(true, true);
    $panel.data('animating', true).slideDown(200, async function () {
      if (!$panel.data('inited')) {
        $panel.data('inited', true);
        await mountRecap($panel[0]);
      }
      $panel.data('animating', false);
    });
  } else {
    $btn.attr('aria-expanded', 'false');
    $panel.stop(true, true);
    $panel.data('animating', true).slideUp(200, function () {
      $panel.attr('hidden', '');
      $panel.data('animating', false);
    });
  }
});

});