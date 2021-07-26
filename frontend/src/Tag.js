class Tag {

  constructor(tagJson) {
    this.id = tagJson.id;
    this.name = tagJson.name;
    this.noteId = tagJson.note_id;
  }

  appendToThisNoteDiv() {
    const thisNoteDiv = document.getElementById(`note${this.noteId}`)
    const tagTemplate = `
    <p class="publishedTag" id=${this.id}>
      ${this.name}
    </p>
  `;
  thisNoteDiv.innerHTML += tagTemplate;
  }
}