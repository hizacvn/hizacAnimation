    const menuButton = document.getElementById('menu-button');
    const dataPanel = document.getElementById('data-panel');
    const closeButton = document.getElementById('close-button');

    menuButton.addEventListener('click', function() {
      dataPanel.classList.toggle('active');
    });

    closeButton.addEventListener('click', function() {
      dataPanel.classList.remove('active');
    });