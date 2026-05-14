// LUCIDE ICONS

lucide.createIcons();


// ======================
// DARK MODE
// ======================

const darkModeBtn = document.querySelector(".dark-mode-btn");

darkModeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

});


// ======================
// RTL MODE
// ======================

const rtlBtn = document.querySelector(".rtl-btn");

rtlBtn.addEventListener("click", () => {

  document.body.classList.toggle("rtl-mode");

});

/* ===================================================
   DARK MODE
=================================================== */

const themeToggle = document.getElementById("theme-toggle");

/* CLICK */

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  /* SAVE THEME */

  if(document.body.classList.contains("dark-mode")){

    localStorage.setItem("theme","dark");

  }else{

    localStorage.setItem("theme","light");
  }
});

/* LOAD SAVED THEME */

if(localStorage.getItem("theme") === "dark"){

  document.body.classList.add("dark-mode");
}