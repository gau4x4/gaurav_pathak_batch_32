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

// Create an object about your profile with minimum 10 props
// hobbies as an array {sport, sporttype achievement, display your last hobby and your avatar, image, in the html, with height 250,250} in a circle or in round shape

(function () {
  const gaurav = {
    name: "Gaurav Pathak",
    education: "MS in CS from UF",
    age: 28,
    dob: "04/22/1995",
    country: "India",
    placeOfBirth: "Lucknow",
    experience: "5Yrs",
    avatar: "./avatar.jpeg",
    bloodGroup: "B-",
    hobbies: [
      {
        type: "cricket",
        achievement: "CII Winner 2018,2019",
        sportType: "Non Atheletic",
      },
      {
        type: "cricket",
        achievement: "CII Winner 2018,2019",
        sportType: "Non Atheletic",
      },
    ],
  };
  const avatarAnchor = document.querySelector(".avatar");
  // console.log(avatarAnchor[0]);
  avatarAnchor.setAttribute("src", gaurav["avatar"]);
  const hobbiesAnchor = document.querySelector(".hobbies");
  hobbiesAnchor.innerText = gaurav.hobbies[gaurav.hobbies.length - 1]?.type;
  //  export const imgSrc= gaurav.hobbies[gaurav.hobbies.length - 1]?.type;
})();

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
