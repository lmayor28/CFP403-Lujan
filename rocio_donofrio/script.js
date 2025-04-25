function toggleMenuInterno() {
    const menu = document.getElementById('menuInterno');
    menu.classList.toggle('visible');
  }

  
  document.addEventListener('click', function (event) {
    const menu = document.getElementById('menuInterno');
    const button = document.querySelector('.hamburguesa-btn');
  
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnButton = button.contains(event.target);
  
    if (!isClickInsideMenu && !isClickOnButton) {
      menu.classList.remove('visible');
    }
  });
