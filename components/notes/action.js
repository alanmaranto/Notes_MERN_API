const store = require("./store");

const getNotes = () => {
  return new Promise((resolve, reject) => {
    resolve(store.getNotes());
  });
};

const getNotesById = userId => {
  return new Promise((resolve, reject) => {
    resolve(store.getNotesById(userId));
  });
};

const addNote = (title, content, author) => {
  return new Promise((resolve, reject) => {
    if (!title || !content || !author) {
      console.error("[noteController] No hay nota, titulo o autor");
      reject("Los datos son incorrectos");
      return false;
    }

    const newNote = {
      title,
      content,
      date: new Date(),
      author
    };

    store.addNote(newNote);
    resolve(newNote);
  });
};

const updateNote = (id, title, content, author) => {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      reject("Invalid data");
      return false;
    }

    const updatedNote = {
        title,
        content,
        date: new Date(),
        author
    }

    console.log('updatednoteaction', updatedNote)

    const result = await store.editNote(id, updatedNote);
    console.log('result', result)
    resolve(result);
  });
};

const deleteNote = id => {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("Id invalido");
      return false;
    }

    store
      .deleteNote(id)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = {
  getNotes,
  getNotesById,
  addNote,
  updateNote,
  deleteNote
};
