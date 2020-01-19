const Model = require("./model");

const getNotes = async () => {
  const notes = await Model.find(); // Devuelve un array con todas las notas de la db
  return notes;
};

const getNotesById = async userId => {
  const note = await Model.findById(userId);
  return note;
};

const addNote = async note => {
  const newNote = new Model(note);
  await newNote.save();
};

const editNote = async (id, note) => {
  const foundedNote = await Model.findByIdAndUpdate({_id:id}, {
      $set: note
  });

  foundedNote.note = note;
  console.log('foundednote.not', foundedNote.note)
  const newNote = await foundedNote.save();
  console.log('newNote', newNote)
  return newNote;
};

const deleteNote = async id => {
  return Model.findByIdAndDelete(id);
};

module.exports = {
  getNotes: getNotes,
  getNotesById: getNotesById,
  addNote: addNote,
  editNote: editNote,
  deleteNote: deleteNote
};
