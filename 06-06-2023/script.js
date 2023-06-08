const profileForm = document.querySelector(".profileForm");

const formHandler = function () {
  const labelObj = {
    fname: "First Name",
    lname: "Last Name",
    dob: "Date of Birth",
    email: "Email Id",
    phone: "Phone Number",
    gender: "Gender",
    hobbies: "Hobbies",
  };

  const gender = profileForm.elements["gender"];
  const hobbies = profileForm.elements["hobbies"];
  let selectedGender = "";
  gender.forEach((gen) => {
    if (gen.checked) selectedGender = gen.value;
  });

  let selectedHobbies = [];
  hobbies.forEach((hobbies) => {
    if (hobbies.checked) selectedHobbies.push(hobbies.value);
  });
  const obj = {
    fname: profileForm.elements["fname"].value,
    lname: profileForm.elements["lname"].value,
    dob: profileForm.elements["dob"].value,
    email: profileForm.elements["email"].value,
    phone: profileForm.elements["phone"].value,
    gender: selectedGender,
    hobbies: selectedHobbies,
  };

  const ul = document.querySelector(".ul-dataDom");
  ul.innerHTML = "";
  for (const [key, value] of Object.entries(obj)) {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const p = document.createElement("p");
    label.innerText = labelObj[key];
    p.innerText = value;
    li.appendChild(label);
    li.appendChild(p);
    ul.appendChild(li);
  }
};

profileForm.addEventListener("submit", function (e) {
  e.preventDefault();
  formHandler();
});
