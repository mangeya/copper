function search() {
    var category = document.getElementById("category").value;
  
    if (category === "tech") {
      window.location.href = "results.html?category=tech";
    } else if (category === "clubs") {
      window.location.href = "results.html?category=clubs";
    } else if (category === "networking") {
      window.location.href = "results.html?category=networking";
    }
  }
  