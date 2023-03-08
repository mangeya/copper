function search() {
    var category = document.getElementById("category").value;
    var results = document.getElementById("results");
    results.innerHTML = "";
  
    if (category === "tech") {
      results.innerHTML = "<li>Opportunity 1</li><li>Opportunity 2</li><li>Opportunity 3</li>";
    } else if (category === "clubs") {
      results.innerHTML = "<li>Club 1</li><li>Club 2</li><li>Club 3</li>";
    } else if (category === "networking") {
      results.innerHTML = "<li>Networking Event 1</li><li>Networking Event 2</li><li>Networking Event 3</li>";
    }
  }
  