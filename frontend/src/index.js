/*********************Append all Notes + Tags to DOM***************** */

const baseUrl = 'http://localhost:3000';

const getAllNotes = () => {
  return fetch(`${baseUrl}/notes`)
    .then( resp => resp.json() )
    .then( notes => renderAllNotesWithTags(notes) )
    .catch( error => console.log("Error:", error))
}

const renderAllNotesWithTags = (notes) => {
  if (notes.length > 0) {
    const notesContainerDiv = document.getElementById("notesContainer");
    notesContainerDiv.innerHTML = "<h2>Published Notes</h2><i>Double click a tag to remove it.</i>"

    notes.forEach( (note) => {
      const thisNote = new Note(note)
      thisNote.appendToDiv("notesContainer")
    }) 
  }
}

document.addEventListener("DOMContentLoaded", getAllNotes)

/**********************Form to create a new note****************************/

const submitNewNote = (event) => {
  event.preventDefault();

  let newNoteTitle = document.querySelector("#newNoteTitle").value;
  let newNoteBody = document.querySelector("#newNoteBody").value;
  const jsonToSend = {
    note: {
      title: newNoteTitle,
      body: newNoteBody,
    }
  }

  document.querySelector("#newNoteTitle").value = "";
  document.querySelector("#newNoteBody").value = "";

  postNewNote(jsonToSend)
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
  return fetch(`${baseUrl}/notes`, configObj)
    .then( resp => resp.json() )
    .then( (json) => renderNewNote(json))
    .catch( error => console.log("Error:", error) )
}

const renderNewNote = (json) => {
  const note = new Note(json)
  note.appendToDiv("notesContainer")
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
    
    tagElement.remove()
  }
}
document.addEventListener("dblclick", deleteTag)

/****************Add a Tag to an existing Note********************/

const addNewTagFields = (event) => {
  if (event.target.className === "tagsAddButton") {
    const thisNoteHeader = event.target.parentElement
    const newTagField = `
      <input type="text" id="newTagName"/>
      <button id="submitTag">Submit tag</button>
      <button id="cancelSubmitTag">Cancel</button>
    `
    thisNoteHeader.innerHTML += newTagField;
    document.removeEventListener("click", addNewTagFields)
  }
}

const submitNewTag = (event) => {
  if (event.target.id === "submitTag") {
    const thisNoteDivId = event.target.parentElement.parentElement.id;
    const thisNoteId = thisNoteDivId.split("").slice(4).join("");
    const newTagName = document.getElementById("newTagName").value
    const jsonToSend = {
      tag: {
        name: newTagName,
        note_id: thisNoteId
      }
    };

    document.getElementById("newTagName").remove()
    document.getElementById("submitTag").remove()
    document.getElementById("cancelSubmitTag").remove()

    document.addEventListener("click", addNewTagFields)

    postNewTag(jsonToSend);
  }
}

const postNewTag = (data) => {
  const configObj = {
    method: "POST",
    mode: "cors",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(data)
  }
  return fetch(`${baseUrl}/tags`, configObj)
    .then( resp => resp.json() )
    .then( (json) => renderNewTag(json) )
    .catch( error => console.log("Error:", error) )
}

const renderNewTag = (json) => {
  const tag = new Tag(json);
  tag.appendToThisNoteDiv();
}

document.addEventListener("click", addNewTagFields)
document.addEventListener("click", submitNewTag)

/****************Cancel Adding Tag*************/

const cancelAddingTag = (event) => {
  if (event.target.id === "cancelSubmitTag") {
    document.getElementById("newTagName").remove()
    document.getElementById("submitTag").remove()
    document.getElementById("cancelSubmitTag").remove()

    document.addEventListener("click", addNewTagField)
  }
}

document.addEventListener("click", cancelAddingTag)

// Review project requirements
// Final: Add CSS


