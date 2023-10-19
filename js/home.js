const dataUser = window.localStorage.getItem("user");

if (dataUser) {
  const conData = JSON.parse(dataUser);

  const img = document.querySelector("#img_url");
  img.src = conData.avatar;

  const name = document.querySelector("#username");
  name.innerHTML = conData.name;
} else {
  location.assign("index.html");
}

function onLogout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}

const conData = JSON.parse(dataUser)
const notesTitle = document.getElementById("notestitle")
notesTitle.innerHTML = conData.notetitle

const date = document.getElementById("date")
date.innerHTML = conData.date

const notes = document.getElementById("notes")
notes.innerHTML = conData.notes

const notesTitle2 = document.getElementById("notestitle2")
notesTitle2.innerHTML = conData.notetitle2

const notes2 = document.getElementById("notes2")
notes2.innerHTML = conData.notes2