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



function showanser() {
   document.getElementById("anser1").innerHTML=answer;

}


function toggleMenu() {
  const menu = document.getElementById("menu");
  const icon = document.getElementById("menuIcon");

  menu.classList.toggle("active");

  // تغيير الأيقونة بين ☰ و ✖️
  if (menu.classList.contains("active")) {
    icon.textContent = "✖️";
  } else {
    icon.textContent = "☰";
  }
}
