class Note {

  constructor(noteJson) {
    this.id = noteJson.id;
    this.title = noteJson.title;
    this.body = noteJson.body;
    this.tags = noteJson.tags;
  }

  static getAndDisplayAllNotes = () => {
    return fetch("http://localhost:3000/notes")
      .then( resp => resp.json() )
      .then( notes => this.renderAllNotesWithTags(notes) )
      .catch( error => console.log("Error:", error))
  }

  static renderAllNotesWithTags = (notes) => {
    if (notes.length > 0) {
      const notesContainerDiv = document.getElementById("notesContainer");
      notesContainerDiv.innerHTML = "<h2>Published Notes</h2><i>Double click a tag to remove it.</i>"

      notes.forEach( (note) => {
        const thisNote = new Note(note)
        thisNote.appendToDOM()
      }) 
    }
  }

  appendToDOM = () => {
    const notesContainerDiv = document.getElementById("notesContainer");
    let bodyTemplate = `
      <div id=note${this.id}>
        <h3>
          Title: ${this.title} 
          <button id=${this.id} class="noteDeleteButton">Delete Note</button>
          <button id=${this.id} class="tagsAddButton">Add a tag</button>
        </h3>
        <span class="publishedNoteBody">
          <p>${this.body}</p>
        </span>
      </div>
    `;
    notesContainerDiv.innerHTML += bodyTemplate;
    const thisNoteDiv = document.getElementById(`note${this.id}`)
    this.tags.forEach( (tag) => {
      let tagTemplate = `
        <p class="publishedTag" id=${tag.id}>
          ${tag.name}
        </p>
      `;
      thisNoteDiv.innerHTML += tagTemplate;
    })
  }

}
