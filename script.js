    const darkModebtn = document.getElementById("darkMode");
    const body = document.body;
    const mainNav = document.querySelector(".nav-div");
    const sideNavDiv = document.querySelector(".sideNavDiv");
    const sideNavBar = document.getElementById("sideNavBtn");
    const allLinks = document.querySelectorAll("a");

    darkModebtn.addEventListener("click", function() {
      body.classList.toggle("dark-mode");
      
      if (body.classList.contains("dark-mode")) {
        darkModebtn.textContent = "Light Mode";
      } else {
        darkModebtn.textContent = "Dark Mode";
      }
    });

    sideNavBar.addEventListener("click", function() {
      sideNavDiv.classList.toggle("hidden");
    });

    allLinks.forEach(link => {
      link.addEventListener("mouseenter", function() {
        this.style.transform = "translateY(-2px)";
      });
      link.addEventListener("mouseleave", function() {
        this.style.transform = "translateY(0)";
      });
    });

    document.getElementById("intrested").addEventListener("click", function() {
      alert("Thank you for the response!!!");
    });