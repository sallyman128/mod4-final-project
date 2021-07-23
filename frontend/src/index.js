/*********************Append all Notes + Tags to DOM***************** */

const baseUrl = 'http://localhost:3000';

const getAllNotes = () => {
  return fetch(`${baseUrl}/notes`)
    .then( resp => resp.json() )
    .then( notes => renderNotes(notes) )
    .catch( error => console.log("Error", error))
}

const renderNotes = (notes) => {
  if (notes.length > 0) {
    const notesContainerDiv = document.getElementById("notesContainer");
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

const postNewNoteAndTag = (event) => {
  event.preventDefault();
  const newNoteTitle = document.querySelector("#newNoteTitle").value;
  const newNoteBody = document.querySelector("#newNoteBody").value;
  const newNoteTag = document.querySelector("#newNoteTag").value;

  const jsonToSend = {
    note: {
      title: newNoteTitle,
      body: newNoteBody,
      tags: {
        title: newNoteTag
      }
    }
  }
  // post Note
  postNewNote(jsonToSend)
  

  // post the Tag
  // postNewTag
}

const postNewNote = (data) => {

  const configObj = {
    method: "POST",
    mode: "cors",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(data)
  }
  fetch(`${baseUrl}/notes`, configObj)
    .then( data => console.log(data))
}

const newNoteForm = document.getElementById("newNoteForm");

newNoteForm.addEventListener("submit", postNewNoteAndTag)


/****************Delete an existing Note***************************/

/****************Delete an existing associated Tag*****************/


