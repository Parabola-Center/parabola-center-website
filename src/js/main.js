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
})();
