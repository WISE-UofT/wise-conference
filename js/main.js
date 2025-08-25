jQuery(function ($) {
    // ------- Fast smooth scroll settings -------
    const FAST_SCROLL_MS = 300;
    $.easing.easeInOutQuart = function (x, t, b, c, d) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
      return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
    };
  
    // ------- Carousel dots -------
    const $slides = $(".carousel-slide");
    const $dotsWrap = $(".carousel-dots");
    const numSlides = $slides.length;
  
    for (let i = 0; i < numSlides; i++) $dotsWrap.append('<div class="carousel-dot"></div>');
    $(".carousel-dot:first").addClass("active");
  
    function goToSlide(index) {
      $slides.hide().eq(index).show();
      $(".carousel-dot").removeClass("active").eq(index).addClass("active");
    }
  
    function nextSlide() {
      const currentIndex = $slides.filter(":visible").index();
      const nextIndex = (currentIndex + 1) % numSlides;
      goToSlide(nextIndex);
    }
  
    let slideInterval = setInterval(nextSlide, 3000);
    $dotsWrap.on("click", ".carousel-dot", function () {
      clearInterval(slideInterval);
      goToSlide($(this).index());
      slideInterval = setInterval(nextSlide, 3000);
    });
  
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
    function updateHeader() {
      $(window).scrollTop() > 100 ? $header.addClass("header-scrolled") : $header.removeClass("header-scrolled");
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
      const targetDate = new Date("Jan 25, 2025").getTime();
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
  