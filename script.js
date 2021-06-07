




// 1. Look up API documentation for how to get the data I want "FETCH the data"
const provincesSelectElement = document.getElementById("provinces");

const resultsElement = document.getElementById("results");

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
    // console.log(provincesSelectElement.value);
    fetch(`https://api.covid19tracker.ca/summary/split/`)
      .then((response) => response.json())
      .then((summaryData) => {
        // console.log(summaryData.data);
        const selectedProvData = summaryData.data.find(
            item => item.province === provincesSelectElement.value
        )
        // console.log(selectedProvData.total_vaccinations);
        resultsElement.innerText = selectedProvData.total_vaccinations;
      });
  }

