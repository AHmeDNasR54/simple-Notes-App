document.addEventListener("DOMContentLoaded", loadNotes);

function addNote() {
  const titleInput = document.getElementById("title");
  const descInput = document.getElementById("description");
  let title = titleInput.value.trim();
  let description = descInput.value.trim();

  if (title === "" || description === "") {
    alert("Please enter both a title and description.");
    return;
  }

  const note = {
    title,
    description
  };

  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));

  titleInput.value = "";
  descInput.value = "";

  displayNotes(notes);
}

function loadNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  displayNotes(notes);
}

function displayNotes(notes) {
  const notesList = document.getElementById("notes-list");
  notesList.innerHTML = "";

  notes.forEach((note, index) => {
    const noteEl = document.createElement("div");
    noteEl.className = "note";
    noteEl.innerHTML = `<h3>${note.title}</h3><p>${note.description}</p>`;
    notesList.appendChild(noteEl);
  });
}
