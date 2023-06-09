const formHandler = function () {
  const labelObj = {
    fname: "First Name",
    lname: "Last Name",
    dob: "Date of Birth",
    email: "Email Id",
    phone: "Phone Number",
    college: "College Name",
    company: "Company Name",
  };
  const obj = {
    fname: document.querySelector("[name=fname]").value,
    lname: document.querySelector("[name=lname]").value,
    dob: document.querySelector("[name=dob]").value,
    email: document.querySelector("[name=email]").value,
    phone: document.querySelector("[name=phone]").value,
    college: document.querySelector("[name=college]").value,
    company: document.querySelector("[name=company]").value,
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

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  formHandler();
});

// const primary_button = document.querySelector(".primary_button");
// function handleFormFromButton(e) {
//   e.preventDefault();
//   formHandler();
// }
// const handleForm = function (e) {
//   e.preventDefault();
// };
