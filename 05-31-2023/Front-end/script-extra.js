// Fetch with promise and handling with then & IIFE[]
(function () {
  fetch(`https://catfact.ninja/fact`, {
    //   body: JSON.stringify(data),
    method: "GET",
    mode: "cors",
  })
    .then((res) => res.json())
    .then((response) => {
      console.table(response);
    });
})();
// Fetch with async await without using then
const getCatData = async function () {
  const data = await fetch(`https://catfact.ninja/fact`, {
    //   body: JSON.stringify(data),
    method: "GET",
    mode: "cors",
  });
  const response = await data.json();
  console.table(response);
};
getCatData();
//
async function logJSONData() {
  const URL = "https://dummyjson.com/products/5";
  const response = await fetch(URL);
  const jsonData = await response.json();
  console.table(jsonData);
}
logJSONData();

var t = Symbol("foo");
const x = typeof t;
console.log(x);

const car = {
  name: "Koenigsegg",
  some: [],
  some1: {},
};
list = [1, 2, 3, 5, 6];
console.log(car["name"]);
console.log((car.model ??= 4));
console.log(car.model);

// Assignment Question
function add(array, v) {
  array.push(v);
  return array;
}
