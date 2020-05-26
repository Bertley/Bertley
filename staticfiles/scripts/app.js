/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/common */ "./src/scripts/layout/common.js");
/* harmony import */ var _layout_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_layout_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/app.scss */ "./src/styles/app.scss");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/scripts/layout/common.js":
/*!**************************************!*\
  !*** ./src/scripts/layout/common.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/*
 * Author: ArtStyles (Art)
 * Template Name: Fotico
 * Version: 1.0
*/


$(document).ready(function () {
  /*-----------------------------------------------------------------
    Detect device mobile
  -------------------------------------------------------------------*/
  var isMobile = false;

  if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('html').addClass('touch');
    isMobile = true;
  } else {
    $('html').addClass('no-touch');
    isMobile = false;
  }
  /*-----------------------------------------------------------------
    Preloader
  -------------------------------------------------------------------*/


  var e = 0,
      b = $(".bg").length,
      t = 0;
  $('.bg').imagesLoaded({
    background: true
  }).always(function (e) {
    setTimeout(function () {
      $(".loading").addClass("bounceOutRight");
      $("body").removeClass("preload");
    }, 2000);
  }).progress(function (a, i) {
    var n = 100 * (t = ++e / b);
    $(".progress-bar").css("width", n + "%");
  });
  /*-----------------------------------------------------------------
    Smooth scroll
  -------------------------------------------------------------------*/

  $('body').easeScroll({
    frameRate: 60,
    animationTime: 1500,
    stepSize: 120,
    pulseAlgorithm: !0,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: !0,
    arrowScroll: 50
  });
  /*-----------------------------------------------------------------
    Hamburger
  -------------------------------------------------------------------*/

  $('.hamburger').on('click', function () {
    $(this).toggleClass('is-active');
    $('body').toggleClass('open');
    $('.menu').toggleClass('menu-show');
    $('html').toggleClass('is-scroll-disabled');
    $('.ef-background').addClass('animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass('animated');
    });
  });
  $(document).keyup(function (e) {
    if (e.keyCode === 27) $('.open .hamburger').click();
  });
  /*-----------------------------------------------------------------
    Input
  -------------------------------------------------------------------*/

  $(".form-input, .form-textarea").focus(function () {
    $(this).parent().addClass("is-completed");
  });
  $(".form-input, .form-textarea").focusout(function () {
    if ($(this).val() === "") $(this).parent().removeClass("is-completed");
  });
  /*-----------------------------------------------------------------
  Masonry
  -------------------------------------------------------------------*/

  var $newsGrid = $('.news-grid').isotope({
    itemSelector: '.news-item',
    percentPosition: true,
    layoutMode: 'masonry',
    transitionDuration: '0.8s',
    hiddenStyle: {
      opacity: 0,
      transform: 'scale(0.001)'
    },
    visibleStyle: {
      opacity: 1,
      transform: 'scale(1)'
    },
    masonry: {
      gutter: 60 //isFitWidth: true

    }
  });
  $newsGrid.imagesLoaded().progress(function () {
    $newsGrid.masonry({
      gutter: 60 //isFitWidth: true

    });
  });
  /*-----------------------------------------------------------------
    Carousels
  -------------------------------------------------------------------*/

  $('body').imagesLoaded().always(function (instance) {
    setTimeout(function () {
      // Half carousel
      var swiper = new Swiper('.half-slider', {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        autoplay: {
          disableOnInteraction: false,
          delay: 6000
        },
        speed: 1000,
        simulateTouch: false,
        roundLengths: true,
        keyboard: true,
        mousewheel: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }); // Carousel horizontal

      var swiper = new Swiper('.carousel-horizontal', {
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 400,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        autoplay: {
          disableOnInteraction: false
        },
        speed: 1000,
        roundLengths: true,
        keyboard: true,
        parallax: true,
        mousewheel: true,
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          0: {
            spaceBetween: 0
          },
          580: {
            spaceBetween: 15
          },
          768: {
            spaceBetween: 50
          },
          900: {
            spaceBetween: 80
          },
          1200: {
            spaceBetween: 130
          },
          1500: {
            spaceBetween: 220
          },
          1800: {
            spaceBetween: 240
          }
        }
      }); // Carousel vertical

      var swiper = new Swiper('.carousel-vertical', {
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 100,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        autoplay: {
          disableOnInteraction: false
        },
        speed: 1000,
        roundLengths: true,
        keyboard: true,
        parallax: true,
        mousewheel: true,
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          0: {
            spaceBetween: 0
          },
          580: {
            spaceBetween: 15
          }
        }
      });
    }, 2000);
  });
  /*-----------------------------------------------------------------
    Tilt effect
  -------------------------------------------------------------------*/

  $('body').imagesLoaded().always(function (instance) {
    if (window.innerWidth > 580) {
      var $photoBase = $(".tilt").tilt({
        maxTilt: 10,
        perspective: 1500,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 1000,
        glare: true,
        maxGlare: 0.3,
        scale: 1.04
      });
    }
  });
  /*-----------------------------------------------------------------
    Autoresize textarea
  -------------------------------------------------------------------*/

  $('textarea').each(function () {
    autosize(this);
  });
  /*-----------------------------------------------------------------
  Skrollr
  -------------------------------------------------------------------*/

  var s = skrollr.init({
    forceHeight: false,
    smoothScrolling: true,
    mobileCheck: function () {
      return false;
    }
  });
  /*-----------------------------------------------------------------
  Waypoint
  -------------------------------------------------------------------*/

  $('body').imagesLoaded().always(function (instance) {
    setTimeout(function () {
      //slide in down
      $('.slideInDown').waypoint(function () {
        if (!isMobile) {
          $(this.element).addClass('animated');
        }
      }, {
        offset: '80%'
      }); //effect reveal

      $('.effect-reveal').waypoint(function () {
        $(this.element).addClass('animated');
      }, {
        offset: '80%'
      }); //down up

      if (!isMobile) {
        $('.down-up-2').waypoint(function (direction) {
          if (direction === 'down') {
            $(this.element).addClass('animated');
          } else {
            $(this.element).removeClass('animated');
          }
        }, {
          offset: '100%'
        });
      } //reveal


      $('.reveal').waypoint(function (direction) {
        if (direction === 'down') {
          $(this.element).addClass('animated');
        } else {
          $(this.element).removeClass('animated');
        }
      }, {
        offset: '80%'
      }); //os

      if (!isMobile) {
        $('.os').waypoint(function (direction) {
          if (direction === 'down') {
            $(this.element).addClass('animated');
          } else {
            $(this.element).removeClass('animated');
          }
        }, {
          offset: '100%'
        });
      }
    }, 2000);
  });
  /*-----------------------------------------------------------------
    Scrollspy
  -------------------------------------------------------------------*/

  var navItem = $('.page-nav__item');
  navItem.on('click', function (e) {
    var target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 600);
    $(this).addClass('active');
    e.preventDefault();
  });
  $(window).on('scroll', function () {
    pageNav();
  });

  function pageNav() {
    var sTop = $(window).scrollTop();
    $('.work-item').each(function () {
      var id = $(this).attr('id'),
          offset = $(this).offset().top - 100,
          height = $(this).height();

      if (sTop >= offset && sTop < offset + height) {
        navItem.removeClass('active');
        $('.page-nav').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });
  }

  pageNav();
  /*-----------------------------------------------------------------
    Stick
  -------------------------------------------------------------------*/

  $('.page-nav').stick_in_parent({
    offset_top: 100
  });
  $('.page-nav').stick_in_parent().on('sticky_kit:unbottom', function (e) {
    $(this).css({
      display: 'block'
    });
  }).on('sticky_kit:bottom', function (e) {
    $(this).css({
      display: 'none'
    });
  });
  /*-----------------------------------------------------------------
    Jarallax
  -------------------------------------------------------------------*/

  $('.jarallax').jarallax({
    speed: 0.8,
    type: 'scroll'
  });
  /*-----------------------------------------------------------------
    Subscribe form
  -------------------------------------------------------------------*/

  $('.newsletter-form').ajaxChimp({
    url: "http://netgon.us13.list-manage.com/subscribe/post?u=b3954a95f1a55ffe65dd25050&amp;id=50b6fd13c3",
    // Your url MailChimp
    callback: function (response) {
      $('.newsletter-form .form-result').html(response.msg);
    }
  });
  /*-----------------------------------------------------------------
    Contacts form
  -------------------------------------------------------------------*/

  $("#contact-form").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
      // handle the invalid form...
      formError();
      submitMSG(false, "Please fill in the form...");
    } else {
      // everything looks good!
      event.preventDefault();
      submitForm();
    }
  });

  function submitForm() {
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    $.ajax({
      type: "POST",
      url: "assets/php/form-contact.php",
      data: "name=" + name + "&email=" + email + "&message=" + message,
      success: function (text) {
        if (text == "success") {
          formSuccess();
        } else {
          formError();
          submitMSG(false, text);
        }
      }
    });
  }

  function formSuccess() {
    $("#contact-form")[0].reset();
    submitMSG(true, "Congratulations! Message Submitted!");
  }

  function formError() {
    $("#contact-form").removeClass().addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass();
    });
  }

  function submitMSG(valid, msg) {
    if (valid) {
      var msgClasses = "form-result";
    } else {
      var msgClasses = "form-result";
    }

    $("#validator-contact").removeClass().addClass(msgClasses).text(msg);
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=app.js.map