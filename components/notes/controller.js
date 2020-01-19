const express = require("express");
const response = require("../../utils/responses/response");
const router = express.Router();
const action = require("./action.js");

router.get("/", (req, res) => {
  action
    .getNotes()
    .then(notes => {
      response.success(req, res, notes, 200);
    })
    .catch(err => {
      response.error(req, res, "Unexpected Error", 500, err);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  action
    .getNotesById(id)
    .then(user => {
      response.success(req, res, user, 200);
    })
    .catch(err => {
      response.error(req, res, "Internal error", 500, err);
    });
});

router.post("/", (req, res) => {
  const { title, content, author } = req.body;

  action
    .addNote(title, content, author)
    .then(note => {
      response.success(req, res, note, 201);
    })
    .catch(err => {
      response.error(req, res, "Información no valida", 400, err);
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;

  action
    .updateNote(id, title, content, author)
    .then(note => {
      res.status(200).send({ status: 'note updated', note})
    })
    .catch(err => {
      response.error(req, res, "Información no valida", 500, err);
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  action
    .deleteNote(id)
    .then(() => {
      response.success(req, res, `Nota ${id} eliminada`, 200);
    })
    .catch(err => {
      response.error(req, res, "Error interno", 500, err);
    });
});

module.exports = router;
