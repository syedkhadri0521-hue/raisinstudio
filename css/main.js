const themeToggle = document.getElementById("theme-toggle");

/* CHECK BUTTON */

if(themeToggle){

  /* LOAD SAVED THEME */

  if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");

  }

  /* TOGGLE THEME */

  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    /* SAVE THEME */

    if(document.body.classList.contains("dark-mode")){

      localStorage.setItem("theme","dark");

    }else{

      localStorage.setItem("theme","light");

    }

  });

}