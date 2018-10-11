"use strict";
$(document).ready(function() {
  //Svg init Start
  svg4everybody();
  //Svg init End
  var showContacts = (function() {
    var isShow = false;
    $(".js-show-allcontacts").click(function() {
      if (!isShow) {
        $(".ce-header__allcontacts").fadeIn();
        isShow = true;
      } else {
        $(".ce-header__allcontacts").fadeOut();
        isShow = false;
      }
    });
    $(document).mouseup(function(e) {
      var div = $(".ce-header__allcontacts");
      if (!div.is(e.target) && div.has(e.target).length === 0 && $(e.target)[0] !== $(".js-show-allcontacts")[0]) {
        $(".ce-header__allcontacts").fadeOut();
        isShow = false;
      }
    });
  })();

  //Select init  Start
  if ($(".ce-select").length) {
    $(".ce-select").selectmenu();
  }
  //Select init End

  //Slider-range init Start
 /* if ($(".ce-slider-range").length) {
    $(".ce-slider-range").slider({
      range: true,
      values: [ 17, 67 ],
      create: function(event, ui) {
        $(this).slider("option", {
          max: $(this).data("max"),
          min: $(this).data("min"),
          values: $(this)
            .data("values")
            .split(",")
        });
      },
      slide: function(event, ui) {
        var index = $(this)
          .parent()
          .index();

        if (ui.handleIndex === 0) {
          $(".js-ce-slider-range-lowprice")
            .eq(index)
            .text(ui.value);
        } else {
          $(".js-ce-slider-range-highprice")
            .eq(index)
            .text(ui.value);
        }
      }
    });
  }*/

//Slider property
  $( ".ce-slider-range" ).slider({
      range: true,
      values: [25, 253],
      min:0,
      max:500,
      step:1,
      slide: function( event, ui ) {
        $( "#from" ).val(ui.values[ 0 ]);
        $( "#to" ).val(ui.values[ 1 ]);
      }
    });
//Slider property


  // Open mobile menu Start
  $(".js-ce-show-menu").click(function() {
    $("body").toggleClass("ce-mobile-menu-is-show");
  });
  // Open mobile menu End

  // Open mobile search Start
  $(".ce-header__bottom-search-icon").click(function() {
    $(".ce-header__bottom-search").toggleClass("ce-header__bottom-search--isShow");
  });
  // Open mobile search End

  // Counters Init Start
  if ($(".ce-counters").length) {
    var ceCounterIsShow = false;
    var ceCounters = new Waypoint({
      element: document.querySelector(".ce-counters"),
      handler: function() {
        if (ceCounterIsShow == false) {
          $(".ce-counters__item-num").countTo({ refreshInterval: 10 });
          ceCounterIsShow = true;
          Waypoint.destroyAll();
        }
      },
      offset: "bottom-in-view"
    });
  }
  // Counters Init End

  //Slider-range init End
  var ceFilter = {
    search: $("#ce-search-brand"),
    control: $(".ce-filter__top-button"),
    view: $(".ce-filter__body"),
    currentIndex: 0,
    brandCheckbox: $(".ce-filter__brands-list .ce-checkbox"),
    blockChecbox: $(".ce-filter__brands-items-head-box"),
    toggleOtherBrandsBtn: $(".js-ce-filter__brands-head-toggle"),
    toggleBrandsBtn: $(".js-toggle-brands"),
    otherBrandsIsShow: true,
    filterBlockIsShow: true,
    filterPopularIsShow: false,
    brandsIsShow: false,
    brandsBlock: $(".ce-filter__brands"),
    toggleBlock: $(".js-ce-filter__brands-block-other"),
    toggleFilterBlock: $(".ce-filter__block"),
    togglePopularBlock: $(".ce-filter__popular--all"),
    toggleFilterBlockBtn: $(".ce-filter__toggle"),
    toggleFilterPopularBtn: $(".js-show-allpopular"),
    init() {
      var _this = this;
      this.control.on("click", { context: _this }, this.changeView);
      // this.search.hideseek({ highlight: true });
      this.brandCheckbox.on("click", this.brandsCounts);
      // this.blockChecbox.on("click", this.blockSelect);
      this.toggleOtherBrandsBtn.on("click", { context: _this }, this.toggleOtherBrands);
      this.toggleFilterBlockBtn.on("click", { context: _this }, this.toggleFilerBlock);
      this.toggleFilterPopularBtn.on("click", { context: _this }, this.toggleFilerPopular);
      this.toggleBrandsBtn.on("click", { context: _this }, this.toggleBrands);
    },
    changeView(e) {
      var _this = e.data.context;
      $(window).trigger("resize");
      if (_this.currentIndex !== $(this).index()) {
        _this.currentIndex = $(this).index();
        _this.view.fadeOut(0);
        _this.view.eq(_this.currentIndex).fadeIn();
        _this.changeControl();
      }
    },
    changeControl() {
      this.control.removeClass("ce-active");
      this.control.eq(this.currentIndex).addClass("ce-active");
    },
    brandsCounts(e) {
      var brands = $(".ce-filter__brands-list .ce-checkbox input:checked");
      var countText = $(".ce-filter__brands-head-count span");
      return countText.text(brands.length);
    },
    blockSelect(e) {},
    toggleOtherBrands(e) {
      var _this = e.data.context;
      if (_this.otherBrandsIsShow) {
        $(this).text("Показать");
        _this.toggleBlock.fadeOut();
        _this.otherBrandsIsShow = false;
      } else {
        $(this).text("Скрыть");
        _this.toggleBlock.fadeIn();
        _this.otherBrandsIsShow = true;
      }
    },
    toggleFilerPopular(e) {
      var _this = e.data.context;
      if (_this.filterPopularIsShow) {
        $(this).text("Больше размеров");
        _this.togglePopularBlock.fadeOut();
        _this.filterPopularIsShow = false;
        $(window).trigger("resize");
      } else {
        $(this).text("Скрыть");
        _this.togglePopularBlock.fadeIn();
        _this.filterPopularIsShow = true;
        $(window).trigger("resize");
      }
    },
    toggleFilerBlock(e) {
      var _this = e.data.context;
      if (_this.filterBlockIsShow) {
        $(this).text("Показать");
        _this.toggleFilterBlock.fadeOut();
        _this.filterBlockIsShow = false;
      } else {
        $(this).text("Скрыть");
        _this.toggleFilterBlock.fadeIn();
        _this.filterBlockIsShow = true;
      }
    },
    toggleBrands(e) {
      var _this = e.data.context;
      var el = e.target;
      if (_this.brandsIsShow) {
        _this.brandsBlock.fadeOut();
        _this.brandsIsShow = false;
      } else {
        _this.brandsBlock.fadeIn();
        _this.brandsIsShow = true;
      }
      $(document).mouseup(function(e) {
        if (!_this.brandsBlock.is(e.target) && _this.brandsBlock.has(e.target).length === 0 && $(e.target)[0] !== $(el)[0]) {
          _this.brandsBlock.fadeOut(1000);
          _this.brandsIsShow = false;
        }
      });
    }
  };
  ceFilter.init();

  //Slider Start
  /*if ($(".ce-slider").length) {
    $(".ce-slider__wrapper").slick({
      dots: true,
      arrows: false,
      appendDots: $(".ce-slider__dots"),
      infinite: true,
      speed: 300,
      slidesToShow: 1
    });
  }*/
  //Slider End

  //Filter caruserl Start
  if ($(".ce-filter__carusel").length) {
    $(".ce-filter__carusel").slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 8,
      slidesToScroll: 3,
      prevArrow: $(".ce-filter__carusel__arrow--left"),
      nextArrow: $(".ce-filter__carusel__arrow--right")
    });
  }
  //Slider End

  //Carusel Start
  if ($(".ce-carusel__box").length) {
    $(".ce-carusel__box").slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 601,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }
  //Carusel End

  // Sticky  header Start
  window.onscroll = function(e) {
    if ($("html").scrollTop() > window.innerHeight) {
      $(".ce-header__bottom").addClass("ce-sticky");
      $(".ce-result").addClass("ce-sticky");
    } else {
      $(".ce-header__bottom").removeClass("ce-sticky");
      $(".ce-result").removeClass("ce-sticky");
    }
  };
  // Sticky  header End

  //Accardion header Start
  if ($(".ce-accordion").length) {
    $(".ce-accordion").accordion();
    window.onresize = function() {
      if (window.matchMedia("(min-width: 1023px)").matches) {
        $(".ce-accordion ")
          .eq(1)
          .addClass("open");
      }
    };
    setTimeout(function() {
      $(".ce-filter").css({ opacity: "1" });
    }, 500);
  }
  //Accardion header End

  // Scroll top Start
  var ceGoTop = function() {
    var screen = $("html");
    screen.animate(
      {
        scrollTop: 0
      },
      1500
    );
  };
  // Scroll top End
  $(".ce-result__change").click(ceGoTop);

  //Rating Start
  // if ($(".ce-rating").length) {
  //   $(".ce-rating").barrating("show", { theme: "css-stars", readonly: true });
  // }
  // if ($(".ce-add-rating").length) {
  //   $(".ce-add-rating").barrating("show", { theme: "css-stars" });
  // }
  //Rating End
});

$( document ).ready(function() {

  $("#btn").click(
  function(){
   sendAjaxForm('result_form', 'ajax_form', 'index.php');
   alert('777');
     return false; 
  }
);

  for (var i = 0; i < 8; i++) {
  		  $('#ui-id-'+i+'-button').click(
     function(){
     	var val_ = $('#ui-id-'+i+'-button .ui-selectmenu-text').html();
     	$('#ui-id-'+i).val("'"+val_+'"');
     }
  	);
  }
  /*$('#ui-id-1-button').click(
     function(){
     	var b = $('#ui-id-1-button .ui-selectmenu-text').html();
     	$('#ui-id-1').val("'"+b+'"');
     }
  	);*/

  /*  $('#ui-id-2-button').click(
     function(){
     	var b = $('#ui-id-2-button .ui-selectmenu-text').html();
     	$('#ui-id-2').val("'"+b+'"');
     }
  	);*/

});

function sendAjaxForm(result_form, ajax_form, url) {
  $.ajax({
      url:     url, //url страницы (action_ajax_form.php)
      type:     "POST", //метод отправки
      dataType: json, //формат данных
      data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
      success: function() { //Данные отправлены успешно
       // result = $.parseJSON(response);
       // $('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
       $("#result").html();
    },
    error: function() { // Данные не отправлены
         // $('#result_form').html('Ошибка. Данные не отправлены.');
    }
 });
}