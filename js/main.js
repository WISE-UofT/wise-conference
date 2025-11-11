jQuery(function ($) {
    // ------- Fast smooth scroll settings -------
    const FAST_SCROLL_MS = 300;
    $.easing.easeInOutQuart = function (x, t, b, c, d) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
      return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
    };

    // --- Start of Carousel Logic ---
    // Loop through each carousel container on the page
    $('.carousel-container').each(function() {
        var $carousel = $(this);
        var $slides = $carousel.find('.carousel-slide');
        var $dotsContainer = $carousel.next('.carousel-dots');
        var numSlides = $slides.length;
        var slideInterval;

        // If there are no slides in this carousel, skip it
        if (numSlides === 0) {
            $dotsContainer.hide(); // Hide the dots container if no slides
            return;
        }

        // Add a dot for each slide in this specific carousel
        for (var i = 0; i < numSlides; i++) {
            $dotsContainer.append('<div class="carousel-dot"></div>');
        }
        var $dots = $dotsContainer.find('.carousel-dot');

        // Function to go to a specific slide within this carousel
        function goToSlide(index) {
            $slides.hide();
            $slides.eq(index).show();
            $dots.removeClass('active');
            $dots.eq(index).addClass('active');
        }

        // Show the first slide and set the first dot as active
        goToSlide(0);

        // Handle dot click event for this carousel
        $dots.on('click', function () {
            clearInterval(slideInterval); // Stop this carousel's timer
            var index = $(this).index();
            goToSlide(index);
            // Restart this carousel's timer
            slideInterval = setInterval(nextSlide, 3000);
        });

        // Function to go to the next slide in this carousel
        function nextSlide() {
            // Find the visible slide only within this carousel
            var currentIndex = $slides.filter(':visible').index();
            var nextIndex = (currentIndex + 1) % numSlides;
            goToSlide(nextIndex);
        }

        // Set a timer to automatically advance this carousel
        slideInterval = setInterval(nextSlide, 3000);
    });
    // --- End of Carousel Logic ---
  
    // ------- Back to top -------
    const $backToTop = $(".back-to-top");
    $(window).on("scroll", function () {
      $(this).scrollTop() > 100 ? $backToTop.fadeIn("slow") : $backToTop.fadeOut("slow");
    });
    $backToTop.on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, FAST_SCROLL_MS, "easeInOutQuart");
      return false;
    });
  
    // ------- Preloader -------
    $(window).on("load", function () {
      const $pre = $("#preloader");
      if ($pre.length) $pre.delay(100).fadeOut("slow", function () { $(this).remove(); });
    });
  
    // ------- Header on scroll -------
    const $header = $("#header");
    const $logo = $("#logo img");
    function updateHeader() {
      if ($(window).scrollTop() > 100) {
        $header.addClass("header-scrolled");
        if ($logo.length && $logo.attr("src") !== "img/logo-dark-purple.webp") {
          $logo.attr("src", "img/logo-dark-purple.webp");
        }
      } else {
        $header.removeClass("header-scrolled");
        if ($logo.length && $logo.attr("src") !== "img/logo.webp") {
          $logo.attr("src", "img/logo.webp");
        }
      }
    }
    $(window).on("scroll", updateHeader);
    updateHeader();
  
    // ------- Mobile real VH -------
    if (window.matchMedia("(max-width: 767px)").matches) {
      $("#intro").css({ height: $(window).height() });
    }
  
    // ------- Plugins -------
    if (typeof WOW === "function") new WOW().init();
  
    $(".venobox").venobox({
      bgcolor: "",
      overlayColor: "rgba(6, 12, 34, 0.85)",
      closeBackground: "",
      closeColor: "#fff",
    });
  
    $(".nav-menu").superfish({ animation: { opacity: "show" }, speed: 400 });
  
    // ------- Mobile Navigation -------
    if ($("#nav-menu-container").length) {
      const $mobileNav = $("#nav-menu-container").clone().prop({ id: "mobile-nav" });
      $mobileNav.find("> ul").attr({ class: "", id: "" });
      $("body").append($mobileNav)
               .prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>')
               .append('<div id="mobile-body-overly"></div>');
      $("#mobile-nav").find(".menu-has-children").prepend('<i class="fa fa-chevron-down"></i>');
  
      $(document).on("click", ".menu-has-children i", function () {
        $(this).next().toggleClass("menu-item-active").nextAll("ul").eq(0).slideToggle();
        $(this).toggleClass("fa-chevron-up fa-chevron-down");
      });
  
      $(document).on("click", "#mobile-nav-toggle", function () {
        $("body").toggleClass("mobile-nav-active");
        $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
        $("#mobile-body-overly").toggle();
      });
  
      $(document).on("click", function (e) {
        const $container = $("#mobile-nav, #mobile-nav-toggle");
        if (!$container.is(e.target) && $container.has(e.target).length === 0 && $("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
      });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
      $("#mobile-nav, #mobile-nav-toggle").hide();
    }
  
    // ------- Smooth scroll (FAST only) -------
    $(".nav-menu a, #mobile-nav a, .scrollto").on("click", function () {
      if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
        const $target = $(this.hash);
        if ($target.length) {
          let topSpace = 0;
          if ($header.length) {
            topSpace = $header.outerHeight();
            if (!$header.hasClass("header-fixed")) topSpace -= 20;
          }
  
          $("html, body").stop(true).animate(
            { scrollTop: $target.offset().top - topSpace },
            FAST_SCROLL_MS,
            "easeInOutQuart"
          );
  
          if ($(this).parents(".nav-menu").length) {
            $(".nav-menu .menu-active").removeClass("menu-active");
            $(this).closest("li").addClass("menu-active");
          }
  
          if ($("body").hasClass("mobile-nav-active")) {
            $("body").removeClass("mobile-nav-active");
            $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
            $("#mobile-body-overly").fadeOut();
          }
          return false;
        }
      }
    });
  
    // ------- Gallery carousel (Owl) -------
    $(".gallery-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: false,
      center: true,
      responsive: { 0: { items: 0 }, 250: { items: 1 }, 500: { items: 2 }, 600: { items: 3 } },
    });
  
    // ------- Buy tickets modal -------
    $("#buy-ticket-modal").on("show.bs.modal", function (event) {
      const ticketType = $(event.relatedTarget).data("ticket-type");
      $(this).find("#ticket-type").val(ticketType);
    });
  
    // ------- Countdown -------
    (function initCountdown() {
      const targetDate = new Date("Jan 17, 2026 08:00:00").getTime();
      const box = document.getElementById("countdown-box");
      if (!box) return;
  
      const daysEl = document.createElement("SPAN");
      daysEl.className = "days";
      const hoursEl = document.createElement("SPAN");
      hoursEl.className = "hours";
      const minsEl = document.createElement("SPAN");
      minsEl.className = "minutes";
      const secsEl = document.createElement("SPAN");
      secsEl.className = "secs";
      box.append(daysEl, hoursEl, minsEl, secsEl);
  
      setInterval(function () {
        const now = Date.now();
        let secondsLeft = (targetDate - now) / 1000;
  
        const days = parseInt(secondsLeft / 86400, 10); secondsLeft %= 86400;
        const hours = parseInt(secondsLeft / 3600, 10); secondsLeft %= 3600;
        const minutes = parseInt(secondsLeft / 60, 10);
        const seconds = parseInt(secondsLeft % 60, 10);
  
        daysEl.innerHTML = `<span class="number">${days}</span><span class="unit">Days</span>`;
        hoursEl.innerHTML = `<span class="number">${hours}</span><span class="unit">Hrs</span>`;
        minsEl.innerHTML = `<span class="number">${minutes}</span><span class="unit">Mins</span>`;
        secsEl.innerHTML = `<span class="number">${seconds}</span><span class="unit">Secs</span>`;
      }, 1000);
    })();
  
    // ------- Testimonials (Swiper) -------
    if (typeof Swiper === "function") {
      new Swiper(".testimonials-slider", {
        speed: 600,
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        slidesPerView: "auto",
        pagination: { el: ".swiper-pagination", type: "bullets", clickable: true },
        breakpoints: { 320: { slidesPerView: 1, spaceBetween: 20 }, 1200: { slidesPerView: 3, spaceBetween: 20 } },
      });
    }
  });
  
