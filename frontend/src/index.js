/*********************Append all Notes + Tags to DOM***************** */

const baseUrl = 'http://localhost:3000';

const getAllNotes = () => {
  return fetch(`${baseUrl}/notes`)
    .then( resp => resp.json() )
    .then( notes => renderNotes(notes) )
}

const renderNotes = (notes) => {
  if (notes.length > 0) {
    const notesContainerDiv = document.getElementById("notesContainer");
    notesContainerDiv.innerHTML = "<h2>Published Notes</h2>"
    notes.forEach( (note) => {
      const {id, title, body, tags} = note;
      let bodyTemplate = `
        <h3>Title: ${title} <button id=${id}>Delete Note</button></h3>
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

const postNewNote = (event) => {
  event.preventDefault();
}

const newNoteForm = document.querySelector("#newNoteForm")
newNoteForm.addEventListener("submit", postNewNote)

// const postNewNote = (event) => {
//   event.preventDefault();
// }

// DONE add the appropirate HTML meta tags that will allow link to js source code and eventual css
// first get a js class working that can retrieve data from the rails api
// then once that it working, display that info to the DOM
// then build form to add to that list
// then build delete functionality
