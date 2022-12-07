// User Login

// Elements
let sinBtnEl = document.getElementById("sign-up-btn");
let logBtnEl = document.getElementById("sign-ip-btn");
let sinNamEl = document.getElementById("sign-name");
let sinPasEl = document.getElementById("sign-pass");
let conPasEl = document.getElementById("sign-conpass");
let logNamEl = document.getElementById("log-name");
let logPasEl = document.getElementById("log-pass");

// Button Event Listeners
sinBtnEl.addEventListener("click", sinBtnHandler);
logBtnEl.addEventListener("click", logBtnHandler);

let members = loadMembers();

function sinBtnHandler() {}
function logBtnHandler() {}

// Main Functions
function addUser() {
  let name = sinNamEl;
  let password = sinPasEl;
  if (sinPasEl != conPasEl) {
    alert("Passwords do not match");
  } else {
    members.push(newMember(name, password));
    alert(`Hello ${name}. Welcome to the club`);
  }
}

function newMember(memberName, memberPassword) {
  return { name: memberName, password: memberPassword, completed: "" };
}
// Local Save

function logMembers() {
  localStorage.setItem("members", JSON.stringify(members));
}

function loadMembers() {
  let memberStr = localStorage.getItem("members");
  return JSON.parse(memberStr) ?? [];
}
