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
  const fname = document.querySelector("[name=fname]").value;
  const lname = document.querySelector("[name=lname]").value;
  const dob = document.querySelector("[name=dob]").value;
  const email = document.querySelector("[name=email]").value;
  const phone = document.querySelector("[name=phone]").value;
  const college = document.querySelector("[name=college]").value;
  const company = document.querySelector("[name=company]").value;
  const obj = {};
  obj.fname = fname;
  obj.lname = lname;
  obj.dob = dob;
  obj.email = email;
  obj.phone = phone;
  obj.college = college;
  obj.company = company;
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
