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
    notesContainerDiv.innerHTML = "<h2>Published Notes</h2><i>Double click a tag to remove it.</i>"
    notes.forEach( (note) => {
      const {id, title, body, tags} = note;
      let bodyTemplate = `
        <div id=note${id}>
          <h3>
            Title: ${title} 
            <button id=${id} class="noteDeleteButton">Delete Note</button>
            <button id=${id} class="tagsAddButton">Add a tag</button>
          </h3>
          <span class="publishedNoteBody">
            <p>${body}</p>
          </span>
        </div>
      `;

      notesContainerDiv.innerHTML += bodyTemplate;
      
      const thisNoteDiv = document.getElementById(`note${id}`)

      tags.forEach( (tag) => {
        let tagTemplate = `
          <p class="publishedTag" id=${tag.id}>
            ${tag.name}
          </p>
        `;
        thisNoteDiv.innerHTML += tagTemplate;
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
  <div>
    <h3>
      Title: ${json.title} 
      <button id=${json.id} class="noteDeleteButton">Delete Note</button>
      <button id=${json.id} class="tagsAddButton">Add a tag</button>
    </h3>
    <span class="publishedNoteBody">
      <p>${json.body}</p>
    </span>
  </div>
  `;
  notesContainerDiv.innerHTML += template;
}

const newNoteForm = document.getElementById("newNoteForm");
newNoteForm.addEventListener("submit", submitNewNote)


/****************Delete an existing Note***************************/

const deleteNote = (event) => {
  if (event.target.className === "noteDeleteButton") {
    const note_id = event.target.id;
    const configObj = {
      method: "DELETE",
      mode: "cors",
      headers: {
        'Content-Type': "application/json"
      },
    }
    fetch(`${baseUrl}/notes/${note_id}`, configObj)
      .catch( error => console.log("Error:", error) )
    
    // remove the deleted note from the DOM
    const noteElement = event.target.parentElement.parentElement
    noteElement.remove()
  }

}

document.addEventListener("click", deleteNote)

/****************Delete an existing associated Tag*****************/

const deleteTag = (event) => {
  if (event.target.className === "publishedTag") {
    const tagElement = event.target
    const tag_id = tagElement.id;
    const configObj = {
      method: "DELETE",
      mode: "cors",
      headers: {
        'Content-Type': "application/json"
      },
    }
    fetch(`${baseUrl}/tags/${tag_id}`, configObj)
      .catch( error => console.log("Error:", error) )
    
    // remove the deleted note from the DOM
    tagElement.remove()
  }
}
document.addEventListener("dblclick", deleteTag)

/****************Add a Tag to an existing Note********************/




