// testing console.log
// console.log("Testing to see if this shows up on the browser console");

async function logContents() {
  const response = await fetch("./simple.json");
  const details = await response.json();
  details.forEach((show) => {
    console.log(show);
  });
  getOldestSeries(details);
  getNewestSeries(details);
  notForKids(details);
  // show one of the key-value pairs in console
  printDetails(details[0]);
}

logContents();

function getOldestSeries(data) {
  let oldest = null;
  let year = 2023;
  let network = "";

  data.forEach((record) => {
    if (record.pilot_year < year) {
      year = record.pilot_year;
      oldest = record.series_name;
      network = record.network;
    }
  });
  document.getElementById(
    "demo1"
  ).innerHTML = `The oldest show listed is called ${oldest}, which aired for the first time in ${year} on ${network}.`;
}

function getNewestSeries(data) {
  let oldest = null;
  let year = 0;
  let network = "";

  data.forEach((record) => {
    if (record.pilot_year > year) {
      year = record.pilot_year;
      oldest = record.series_name;
      network = record.network;
    }
  });
  document.getElementById(
    "demo2"
  ).innerHTML = `The newest show listed is called ${oldest}, which aired for the first time in ${year} on ${network}.`;
}

function notForKids(data) {
  let shows = [];

  data.forEach((record) => {
    if (record.for_children == false) {
      shows.push(record.series_name);
    }
  });
  document.getElementById(
    "demo3"
  ).innerHTML = `Most of the shows listed are NOT for kids... you should not let them watch the following
  shows: ${shows.toString()}`;
}

// this will log key value pairs for one show to the console
function printDetails(data) {
  for (let key in data) {
    console.log(`${key} = ${data[key]}`);
  }
}
