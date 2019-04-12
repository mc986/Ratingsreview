function myFunction() {
    var x = document.getElementById("menu-content");
    var y = document.getElementById("close-ic");
    var z = document.getElementById("menu-bar");
    var wind = window.matchMedia("(max-width: 1024px)")
    if(wind.matches){
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "block";
            z.style.display = "none";
        } else {
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "block";
        }
    }
  }