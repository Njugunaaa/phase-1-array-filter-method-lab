const drivers = [
  { name: "Sam", hometown: "Nairobi" },
  { name: "Sarah", hometown: "Mombasa" },
  { name: "Sally", hometown: "Kisumu" },
  { name: "Samuel", hometown: "Nakuru" }
];

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

console.log(findMatching(["Sam", "Sarah", "Sally"], "sally"));
console.log(fuzzyMatch(["Sam", "Sarah", "Sally"], "Sa")); 
console.log(matchName(drivers, "Sam")); 
