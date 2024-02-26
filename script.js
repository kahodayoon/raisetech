$(function () {
  // const mediaQuery = window.matchMedia("(min-width: 1201px)");
  // // ページが読み込まれた時に実行
  // handle(mediaQuery);
  // // ウィンドウサイズを変更しても実行（ブレイクポイントの監視）
  // mediaQuery.addEventListener(handle);
  // function handle() {
  if (window.matchMedia("(min-width: 1201px)").matches) {
    $(".list").mouseover(function () {
      $(this).children("#sub-menu").slideDown("fast");
    });
    $(".list").mouseleave(function () {
      $(this).children("#sub-menu").hide();
    });
  } else {
    $("#hamburger").click(function () {
      $(this).toggleClass("open");
      $("#main-nav").slideToggle("fast");
    });
    $(".list").mouseover(function () {
      $(this).children("#sub-menu").slideDown("fast");
    });
    $(".list").mouseleave(function () {
      $(this).children("#sub-menu").hide();
    });
    $(".list").hover(function () {
      $(this).toggleClass("open");
    });
  }
  //   }
  // }
});

let rellax = new Rellax(".js-rellax", {
  speed: -4,
});
