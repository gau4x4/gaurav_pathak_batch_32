// In the execution context the variable is yet to be created;
// in the objects
// Assignment: write a function to return all your hobbies in an array to console or on page.

// And write a function to add a new hobbies to the existing list of hobbies.

// And create a function to delete the specific hobby from the list that I pass into the function.

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
      "Playing & Watching Cricket",
      "Reading about Aeronautics/Aerospace & Astrophysics",
      "Reading about Political Science & Religion",
      "Soccer",
    ],
    getHobbies: function () {
      return this.hobbies;
    },
    setHobbies: function (hobby) {
      this.hobbies.push(hobby);
      return this.hobbies;
    },
    deleteHobbies: function (hobby) {
      this.hobbies = this.hobbies.filter((a) => a !== hobby);
      return this.hobbies;
    },
  };
  console.table(gaurav.getHobbies());
  console.table(gaurav.setHobbies("History"));
  console.table(gaurav.deleteHobbies("Soccer"));
})();
