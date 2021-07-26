class Note {

  constructor(noteJson) {
    this.id = noteJson.id;
    this.title = noteJson.title;
    this.body = noteJson.body;
    this.tags = noteJson.tags;
  }
  
  /*********************Append Note with Tags to DOM***************** */

  appendToDiv = (divID) => {
    const notesContainerDiv = document.getElementById(divID);
    let noteTemplate = `
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
    notesContainerDiv.innerHTML += noteTemplate;
    const thisNoteDiv = document.getElementById(`note${this.id}`)
    if (this.tags.length > 0) {
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

}
