const btn = document.getElementById('menuBtn');
  const options = document.getElementById('menuOptions');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    options.classList.toggle('show'); // إظهار/إخفاء القائمة
  });

  // إخفاء القائمة عند الضغط خارجها
  window.addEventListener('click', () => {
    options.classList.remove('show');
  });
 