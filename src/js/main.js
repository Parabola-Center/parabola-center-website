(function() {
  /*
    Mobile Menu
  */
  
  const $menuButton = document.querySelector("#navbar__mobileButton");
  const $menu = document.querySelector("#navbar__menu");

  let menuOpen = false;

  $menuButton.addEventListener("click", event => {
    if (menuOpen) {
      menuOpen = false;
      $menu.classList.remove('active');
      
    } else {
      menuOpen = true;
      $menu.classList.add('active');
    }
  });

  /*
    Home announcement dismiss
  */
  const $announce = document.getElementById("homeAnnounce");
  const $announceClose = document.getElementById("homeAnnounceClose");
  const ANNOUNCE_KEY = "pc-announce-dismissed-v1";

  if ($announce && $announceClose) {
    try {
      if (window.localStorage && localStorage.getItem(ANNOUNCE_KEY) === "1") {
        $announce.hidden = true;
      }
    } catch (e) {}

    $announceClose.addEventListener("click", function () {
      $announce.hidden = true;
      try {
        if (window.localStorage) localStorage.setItem(ANNOUNCE_KEY, "1");
      } catch (e) {}
    });
  }
})();




