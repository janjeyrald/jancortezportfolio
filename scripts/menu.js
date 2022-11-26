var sidemenu = document.getElementById("sidemenu");
function openMenu() {
    sidemenu.classList.add("show_menu");
    sidemenu.classList.remove("hide_menu");
   }
   function closeMenu() {
    sidemenu.classList.add("hide_menu");
    sidemenu.classList.remove("show_menu");
   }