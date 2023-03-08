var results = [
    {
      name: "Opportunity 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      requirements: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      logo: "https://via.placeholder.com/50",
      link: "https://www.example.com"
    },
    {
      name: "Opportunity 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      requirements: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      logo: "https://via.placeholder.com/50",
      link: "https://www.example.com"
    },
    {
      name: "Opportunity 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      requirements: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      logo: "https://via.placeholder.com/50",
      link: "https://www.example.com"
    }
  ];
  
  function displayResults() {
    var urlParams = new URLSearchParams(window.location.search);
    var category = urlParams.get("category");
  
    var filteredResults = results.filter(function(result) {
      return result.category === category;
    });
  
    var resultsList = document.getElementById("results");
    resultsList.innerHTML = "";
  
    filteredResults.forEach(function(result) {
      var listItem = document.createElement("li");
  
      var logoImg = document.createElement("img");
      logoImg.src = result.logo;
      logoImg.alt = result.name + " logo";
      logoImg.width = "50";
      logoImg.height = "50";
      listItem.appendChild(logoImg);
  
      var nameLink = document.createElement("a");
      nameLink.href = result.link;
      nameLink.innerText = result.name;
      listItem.appendChild(nameLink);
  
      var description = document.createElement("p");
      description.innerText = result.description;
      listItem.appendChild(description);
  
      var requirements = document.createElement("p");
      requirements.innerText = "Requirements: " + result.requirements;
      listItem.appendChild(requirements);
  
      resultsList.appendChild(listItem);
    });
  }
  
  displayResults();
  