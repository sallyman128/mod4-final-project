class Note {

  constructor(noteJson) {
    this.id = noteJson.id;
    this.title = noteJson.title;
    this.body = noteJson.body;
    this.tags = noteJson.tags;
  }

  static displayAllNotes() {

  }
}