




// 1. Look up API documentation for how to get the data I want "FETCH the data"
const provincesSelectElement = document.getElementById("provinces");

fetch("https://api.covid19tracker.ca/provinces")
  .then((response) => response.json())
  .then((listOfProvinces) => {
    listOfProvinces.forEach(province => {
      const provOption = document.createElement("option");
      provOption.value = province.code;
      provOption.text = province.name;
      provincesSelectElement.add(provOption);
    });
  });

  const formElement = document.getElementById("search-form");
  formElement.onsubmit = (event) => {
    event.preventDefault();
    console.log(provincesSelectElement.value);
  }
