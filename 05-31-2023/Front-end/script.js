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
