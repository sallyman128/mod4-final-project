const baseUrl = 'http://localhost:3000';
const notesContainerDiv = document.getElementById("notesContainer");

const getAllNotes = () => {
  return fetch(`${baseUrl}/notes`)
    .then( resp => resp.json() )
    .then( notes => renderNotes(notes) )
}

const renderNotes = (notes) => {
  notes.forEach( (note) => {
    const {title, body} = note;
    const template = `
      <p>
        <h2>Title: ${title}</h2>
        <li>${body}</li>
      </p>
    `;
    console.log(notesContainerDiv);
  })
}

document.addEventListener("DOMContentLoaded", getAllNotes)

// DONE add the appropirate HTML meta tags that will allow link to js source code and eventual css
// first get a js class working that can retrieve data from the rails api
// then once that it working, display that info to the DOM
// then build form to add to that list
// then build delete functionality
