class Note {
  // const baseUrl = 'http://localhost/3000';

  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  static all() {
    return fetch(`http://localhost:3000/notes`)
      .then( resp => resp.json() )
      .then( result => result )
  }
}

// DONE add the appropirate HTML meta tags that will allow link to js source code and eventual css
// first get a js class working that can retrieve data from the rails api
// then once that it working, display that info to the DOM
// then build form to add to that list
// then build delete functionality
