const covidVaccinationApp = {};

covidVaccinationApp.provincesSelectElement =
  document.getElementById("provinces");

covidVaccinationApp.resultsElement = document.getElementById("results");

covidVaccinationApp.init = () => {
  // 1. Look up API documentation for how to get the data I want "FETCH the data"
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

covidVaccinationApp.init();