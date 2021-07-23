/*********************Append all Notes + Tags to DOM***************** */

const baseUrl = 'http://localhost:3000';
const notesContainerDiv = document.getElementById("notesContainer");


const getAllNotes = () => {
  return fetch(`${baseUrl}/notes`)
    .then( resp => resp.json() )
    .then( notes => renderNotes(notes) )
    .catch( error => console.log("Error:", error))
}

const renderNotes = (notes) => {
  if (notes.length > 0) {
    // const notesContainerDiv = document.getElementById("notesContainer");
    notesContainerDiv.innerHTML = "<h2>Published Notes</h2>"
    notes.forEach( (note) => {
      const {id, title, body, tags} = note;
      let bodyTemplate = `
        <h3>
          Title: ${title} 
          <button id=${id}>Delete Note</button>
        </h3>
        <div class="publishedNoteBody">
          <p>${body}</p>
        </div>
      `;

      notesContainerDiv.innerHTML += bodyTemplate;

      tags.forEach( (tag) => {
        let tagTemplate = `
          <p class="publishedTag" id=${tag.id}>
            ${tag.name}
          </p>
        `;
        notesContainerDiv.innerHTML += tagTemplate;
      })
 
    }) 
  }
}

document.addEventListener("DOMContentLoaded", getAllNotes)

/**********************Form to create a new note****************************/

const submitNewNote = (event) => {
  event.preventDefault();

  // get the data from form fields and prepare the json to send to backend
  let newNoteTitle = document.querySelector("#newNoteTitle").value;
  let newNoteBody = document.querySelector("#newNoteBody").value;
  const jsonToSend = {
    note: {
      title: newNoteTitle,
      body: newNoteBody,
    }
  }
  // set the form fields to empty
  document.querySelector("#newNoteTitle").value = "";
  document.querySelector("#newNoteBody").value = "";

  // send the form data to the backend
  postNewNote(jsonToSend)
}

// persist new Note to the database
const postNewNote = (data) => {
  const configObj = {
    method: "POST",
    mode: "cors",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(data)
  }
  return fetch(`${baseUrl}/notes`, configObj)
    .then( resp => resp.json() )
    .then( (json) => renderNewNote(json))
    .catch( error => console.log("Error:", error) )
}

// after the note has been persisted. It will be appended to the DOM.
const renderNewNote = (json) => {
  template = `
  <h3>
    Title: ${json.title} 
    <button id=${json.id}>Delete Note</button>
  </h3>
  <div class="publishedNoteBody">
    <p>${json.body}</p>
  </div>
  `;
  notesContainerDiv.innerHTML += template;
}

const newNoteForm = document.getElementById("newNoteForm");
newNoteForm.addEventListener("submit", submitNewNote)


/****************Delete an existing Note***************************/

/****************Delete an existing associated Tag*****************/

/****************Add a Tag to an existing Note********************/


