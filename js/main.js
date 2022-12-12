// User Login

// Elements
let sinBtnEl = document.getElementById("sign-up-btn");
let logBtnEl = document.getElementById("sign-in-btn");
let sinNamEl = document.getElementById("sign-name");
let sinPasEl = document.getElementById("sign-pass");
let conPasEl = document.getElementById("sign-conpass");
let logNamEl = document.getElementById("log-name");
let logPasEl = document.getElementById("log-pass");

// Button Event Listeners
sinBtnEl.addEventListener("click", sinBtnHandler);
logBtnEl.addEventListener("click", logBtnHandler);

let members = loadMembers();

function sinBtnHandler() {
  console.log("Sign In");
  checkUser();
  saveMembers();
}
function logBtnHandler() {
  console.log("Log-In");
  logIn();
}

// Main Functions
function addUser() {
  let name = sinNamEl.value;
  let password = sinPasEl.value;
  let conPass = conPasEl.value;
  if (password !== conPass) {
    alert("Passwords do not match");
  } else if (password.length < 8) {
    alert("Password must be 8 characters or more");
  } else {
    members.push(newMember(name, password));
    alert(`Hello ${name}. Welcome to the club`);
  }
}

function checkUser() {
  let nameC = sinNamEl.value;
  for (let i = 0; i < members.length; i++) {
    if (members[i].name === nameC) {
      alert("Username is already taken");
      return false;
    }
  }
  addUser();
}

function logIn() {
  let name = logNamEl.value;
  let pass = logPasEl.value;
  for (let i = 0; i < members.length; i++) {
    if (members[i].password === pass && members[i].name === name) {
      alert("Log In Complete");
      return false;
    }
  }
  alert("Log In Failed");
}

function newMember(memberName, memberPassword) {
  return { name: memberName, password: memberPassword, completed: "" };
}
// Local Save

function saveMembers() {
  localStorage.setItem("members", JSON.stringify(members));
}

function loadMembers() {
  let memberStr = localStorage.getItem("members");
  return JSON.parse(memberStr) ?? [];
}
