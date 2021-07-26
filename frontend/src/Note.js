class Note {

  constructor(noteJson) {
    this.id = noteJson.id;
    this.title = noteJson.title;
    this.body = noteJson.body;
    this.tags = noteJson.tags;
  }

  // static getAllNotes() {
  //   return fetch("http://localhost:3000/notes")
  //     .then( resp => resp.json() )
  //     .catch( error => console.log("Error:", error))
  // }

  // static renderAllNotesWithTags(notes) {
  //   if (notes.length > 0) {
  //     const notesContainerDiv = document.getElementById("notesContainer");
  //     notesContainerDiv.innerHTML = "<h2>Published Notes</h2><i>Double click a tag to remove it.</i>"

  //     notes.forEach( (note) => {
  //       const {id, title, body, tags} = note;
  //       // make Note object
  //       let bodyTemplate = `
  //         <div id=note${id}>
  //           <h3>
  //             Title: ${title} 
  //             <button id=${id} class="noteDeleteButton">Delete Note</button>
  //             <button id=${id} class="tagsAddButton">Add a tag</button>
  //           </h3>
  //           <span class="publishedNoteBody">
  //             <p>${body}</p>
  //           </span>
  //         </div>
  //       `;
  
  //       notesContainerDiv.innerHTML += bodyTemplate;
        
  //       const thisNoteDiv = document.getElementById(`note${id}`)
  //       tags.forEach( (tag) => {
  //         let tagTemplate = `
  //           <p class="publishedTag" id=${tag.id}>
  //             ${tag.name}
  //           </p>
  //         `;
  //         thisNoteDiv.innerHTML += tagTemplate;
  //       })
   
  //     }) 
  //   }
  // }
}
