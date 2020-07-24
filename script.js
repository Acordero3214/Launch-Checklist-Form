// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!

*/

window.addEventListener("load", function() {
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then(function(json) {
      const missionTarget = document.getElementById("missionTarget");
      function getRandomIntInclusive(min, max) {
         min = Math.ceil(min);
         max = Math.floor(max);
         return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      let destination = json[getRandomIntInclusive(0, json.length - 1)];

      console.log(getRandomIntInclusive(0, json.length - 1))

      missionTarget.innerHTML = 
      `<h2>Mission Destination</h2>
      <ol>
         <li>Name: ${destination.name}</li>
         <li>Diameter: ${destination.diameter}</li>
         <li>Star: ${destination.star}</li>
         <li>Distance from Earth: ${destination.distance}</li>
         <li>Number of Moons: ${destination.moons}</li>
      </ol>
      <img src="${destination.image}"></img>`
   })
})
const form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let launchStatus = document.getElementById("launchStatus");
      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let setVisibility = function(fuelLevel, cargoMass) {
         if(fuelLevel.value < 10000) {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = `Fuel level is too low for the journey!`;
            launchStatus.innerHTML = `Shuttle is not ready for launch`;
            launchStatus.style.color = "red";
         }
         else {
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
         }
         if(cargoMass.value > 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = `Cargo mass is too high for launch!`;
            launchStatus.innerHTML = `Shuttle is not ready for launch`;
            launchStatus.style.color = "red";
         }
         else {
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
         }
         if(fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
            faultyItems.style.visibility = "hidden";
            launchStatus.innerHTML = `Shuttle is ready for launch`;
            launchStatus.style.color = "green";
         }
      }

      if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
      }
      else if(isNaN(fuelLevel.value)) {
         alert("Please enter a valid number for fuel level!");
      }
      else if(isNaN(cargoMass.value)) {
         alert("Please enter a valid number for cargo mass!");
      }
      else {
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for takeoff.`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for takeoff.`;
         setVisibility(fuelLevel, cargoMass);
      }
   });
});