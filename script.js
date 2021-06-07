// Create namespace
const covidVaccinationApp = {};

covidVaccinationApp.provincesSelectElement = document.getElementById("provinces");

covidVaccinationApp.resultsElement = document.getElementById("results");


// 1. Get Province data from the API
// 2. Render Province data in "select" element
// 3. Handle form submission to collect the province the user selected
// 4. Using province selected by the user to fetch COVID vaccination data
// 5. Rendering total vaccinations to div


covidVaccinationApp.init = () => {
  fetch("https://api.covid19tracker.ca/provinces")
    .then((response) => response.json())
    .then((listOfProvinces) => {
      listOfProvinces.forEach((province) => {
        const provOption = document.createElement("option");
        provOption.value = province.code;
        provOption.text = province.name;
        covidVaccinationApp.provincesSelectElement.add(provOption);
      });
    });


  const formElement = document.getElementById("search-form");
  formElement.onsubmit = (event) => {
    event.preventDefault();
    // console.log(covidVaccinationApp.provincesSelectElement.value);
    fetch(`https://api.covid19tracker.ca/summary/split/`)
      .then((response) => response.json())
      .then((summaryData) => {
        // console.log(summaryData.data);
        const selectedProvData = summaryData.data.find(
          (item) => item.province === covidVaccinationApp.provincesSelectElement.value
        );
        // console.log(selectedProvData.total_vaccinations);
        covidVaccinationApp.resultsElement.innerText =
          selectedProvData.total_vaccinations;
      });
  };
};

// Call namespace
covidVaccinationApp.init();