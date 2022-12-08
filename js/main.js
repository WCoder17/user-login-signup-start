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
//logBtnEl.addEventListener("click", logBtnHandler);

let members = loadMembers();

function sinBtnHandler() {
  console.log("Sign In");

  saveMembers();
}
function logBtnHandler() {}

// Main Functions
function addUser() {
  let name = sinNamEl.value;
  let password = sinPasEl.value;
  members.push(newMember(name, password));
  alert(`Hello ${name}. Welcome to the club`);
}

function checkUser() {
  let nameC = sinNamEl.value;
  for (let i = 0; i < members.length; i++) {
    if (members[i].name === nameC) {
      alert("Username is already taken");
    } else {
      addUser();
    }
  }
}

function checkPass() {
  let passC = sinPasEl.value;
  let cPass = conPasEl.value;
  if (passC !== cPass) {
    alert("Passwords do not match");
  } else {
    checkUser();
  }
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
