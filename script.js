




// 1. Look up API documentation for how to get the data I want "FETCH the data"

fetch("https://api.covid19tracker.ca/provinces")
  .then((response) => response.json())
  .then((listOfProvinces) => {
    const provincesSelectElement = document.getElementById("provinces");
    listOfProvinces.forEach(province => {
      const provOption = document.createElement("option");
      provOption.value = province.code;
      provOption.text = province.name;
      provincesSelectElement.add(provOption);
    });
  });
