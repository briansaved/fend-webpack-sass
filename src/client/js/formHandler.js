function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  const apiKey = `&APPID=4f2ae032089f5dece0abe5982bc51612`;
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;
  let formText = document.getElementById("name").value;
  //Client.checkForName(formText);

  console.log("::: Form Submitted :::");
  fetch(baseUrl + formText + apiKey)
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById("results").innerHTML = res.main.temp;
    });
}

export { handleSubmit };
