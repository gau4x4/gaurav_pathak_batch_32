// Create an object about your profile with minimum 10 props
// hobbies as an array {sport, sporttype achievement, display your last hobby and your avatar, image, in the html, with height,width 250,250} in a circle or in round shape

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
        type: "Playing & Watching Cricket",
        achievement:
          "CII Inter Organization Cricket Tournament Winner 2018,2019",
        hobbyType: "Sports",
      },
      {
        type: "Reading about Aeronautics/Aerospace & Astrophysics",
        achievement: "Nothing Yet",
        hobbyType: "Reading",
      },
      {
        type: "Reading about Political Science & Religion",
        achievement: "Nothing Yet",
        hobbyType: "Reading",
      },
      {
        type: "Soccer",
        achievement: "Started playing in 2022",
        hobbyType: "Sports",
      },
    ],
  };
  // Main wrapper container
  const mainContainer = document.querySelector(".hobbiesPane");
  // Creating img element
  const avatarElem = document.createElement("img");
  // Setting up attributes
  avatarElem.alt = "Avatar";
  avatarElem.src = gaurav["avatar"];
  avatarElem.classList = "avatar";
  // Appending into the main wrapper
  mainContainer.prepend(avatarElem);
  // Accesing last hobby from the hobby array
  const lastHobby = gaurav["hobbies"][gaurav.hobbies.length - 1];
  // Creating Unordered List for hobby attributes
  const unorderList = document.createElement("ul");
  // Setting up attributes
  unorderList.classList = "hobbies";
  // Creating List elements & Iterating over last hobby object's key-value pair and appending every list to the unordered list
  for (const [key, value] of Object.entries(lastHobby)) {
    const listElem = document.createElement("li");
    listElem.innerText = `${key}: ${value}`;
    unorderList.appendChild(listElem);
  }
  // Appending Unordered list to the main container
  mainContainer.append(unorderList);
})();
