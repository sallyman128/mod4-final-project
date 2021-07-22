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
      const {title, body} = note;
      const template = `
        <h3>Title: ${title}</h3>
        <div class="noteBody">
          <p>${body}</p>
          <button>Delete</button>
        </div>
      `;
      notesContainerDiv.innerHTML += template;
    }) 
  }
}

document.addEventListener("DOMContentLoaded", getAllNotes)

// DONE add the appropirate HTML meta tags that will allow link to js source code and eventual css
// first get a js class working that can retrieve data from the rails api
// then once that it working, display that info to the DOM
// then build form to add to that list
// then build delete functionality
