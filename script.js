const headMenu = document.querySelectorAll('.menu__element__link');
headMenu.forEach((item) => {
  item.addEventListener('mouseup', (e) => {
    headMenu.forEach((item) => { item.style.color = 'white'; });
    e.target.style.color = 'red';
  }
  )
})
