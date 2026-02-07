const Bars_menu=document.querySelector('.icon');
const Menu_list=document.querySelector(".nav-bar-menu .menu-bar");

Bars_menu.addEventListener("click",()=>{
   Menu_list.classList.toggle("show");
});