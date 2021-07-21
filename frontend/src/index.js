class Note {
  baseUrl = 'http://localhost/3000';

  get all() {
    fetch(`${baseUrl}/notes`)
    .then( resp => resp.json())
    .then( json => console.log(json))
  }
}
