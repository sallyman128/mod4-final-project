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
      const noteBody = `
        <h3>Title: ${title}</h3>
        <div class="publishedNoteBody">
          <p>${body}</p>
          <button id=${id}>Delete Note</button>
        </div>
      `;
      tags.forEach( (tag) => {
        const {tagId, tagName} = tag["name"]
      })
      notesContainerDiv.innerHTML += noteBody;
    }) 
  }
}

document.addEventListener("DOMContentLoaded", getAllNotes)

// DONE add the appropirate HTML meta tags that will allow link to js source code and eventual css
// first get a js class working that can retrieve data from the rails api
// then once that it working, display that info to the DOM
// then build form to add to that list
// then build delete functionality
