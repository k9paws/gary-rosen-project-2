


// 1. Look up API documentation for how to get the data I want "FETCH the data"


fetch("https://api.covid19tracker.ca/provinces")
  .then((response) => response.json())
  .then((data) => console.log(data));
