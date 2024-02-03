// *************************
// ハンバーガーメニュー(jQuery)
// *************************
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
  jQuery("#js-header").toggleClass("is-checked");
});

// *************************
// ハンバーガーメニュー（リンククリックでドロワーを閉じる）
// *************************
jQuery('#js-drawer a[href^="#"]').on("click", function (e) {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer").removeClass("is-checked");
});

// *************************
// スムーススクロール
// *************************
jQuery('a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  const speed = 300;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top;
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing" // swing or linear
  );
});

// *************************
// reservation-area
// *************************
//画面が読み込まれたら＆リサイズされたら
$(window).on("load resize", function () {
  var windowWidth = window.innerWidth;
  var elements = $(".p-reservation-area");
  if (windowWidth >= 768) {
    /*768px以上にIE用のJSをきかせる*/
    Stickyfill.add(elements);
  } else {
    Stickyfill.remove(elements);
  }
});

//リンク先のidまでスムーススクロール
$(".p-reservation-area__wrap").click(function () {
  var elmHash = $(this).attr("href");
  var pos = $(elmHash).offset().top - 0;
  $("body,html").animate({ scrollTop: pos }, 1000);
  return false;
});

// *************************
// swiper(front-page)
// *************************
// const swiper = new Swiper(".p-mv__swiper-content .swiper", {
//   // Optional parameters
//   loop: true,
//   effect: "fade",
//   autoplay: {
//     delay: 4000, // ４秒後に次の画像へ
//     disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
//   },

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

function initializeSwiper() {
  const swiper = new Swiper(".p-mv__swiper", {
    // Optional parameters
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
initializeSwiper();

// *************************
// swiper(staff-page)
// *************************
function initializeSwiperForStaffGallery() {
  let slidesPerViewValue;

  // デバイスの幅に基づいてslidesPerViewの値を設定
  if (window.innerWidth < 768) {
    // スマートフォンの場合
    slidesPerViewValue = 1.9;
  } else {
    // PCの場合
    slidesPerViewValue = 4.2;
  }

  const swiper = new Swiper(".p-staff-gallery__swiper", {
    loop: true,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    speed: 9000,
    slidesPerView: slidesPerViewValue,
  });
}

// ページ読み込み時に初期化
initializeSwiperForStaffGallery();

// ウィンドウのリサイズ時にもslidesPerViewの値を更新
window.addEventListener("resize", initializeSwiperForStaffGallery);

// *************************
// ページトップボタン
// *************************
jQuery(window).on("scroll", function () {
  if (100 < jQuery(window).scrollTop()) {
    jQuery("#js-pagetop").addClass("is-show");
  } else {
    jQuery("#js-pagetop").removeClass("is-show");
  }
});

// *************************
// form
// *************************
$(function () {
  let $submit = $("#js-submit");
  $("#js-form input").on("change", function () {
    if (
      $('#js-form input[name="your-name"]').val() !== "" &&
      $('#js-form input[name="your-kana"]').val() !== "" &&
      $('#js-form input[name="your-tel"]').val() !== "" &&
      $('#js-form input[name="your-mail"]').val() !== "" &&
      $('#js-form input[name="your-consultation"]').val() !== "" &&
      $('#js-form input[name="your-checkbox"]').val() !== "" &&
      $('#js-form input[name="your-contact"]').val() !== ""
    ) {
      // 全て入力された時
      $submit.prop("disabled", false);
      $submit.addClass("-active");
    } else {
      // 全て入力されていない時
      $submit.prop("disabled", true);
      $submit.removeClass("-active");
    }
  });
});
