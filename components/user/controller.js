const express = require("express");
const response = require("../../utils/responses/response");
const router = express.Router();
const action = require("./action");

router.get("/", (req, res) => {
  action
    .getUsers()
    .then(users => {
      response.success(req, res, users, 200);
    })
    .catch(err => {
      response.error(req, res, "Unexpected Error", 500, err);
    });
});

router.post("/", (req, res) => {
  const { username } = req.body;
  action
    .addUser(username)
    .then(data => {
      response.success(req, res, data, 201);
    })
    .catch(err => {
      response.error(req, res, "Internal error", 500, err);
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  const { username } = req.body;
  console.log("username", username);
  action
    .updateUser(id, username)
    .then(user => {
      res.status(200).send({ status: "username updated", user });
    })
    .catch(err => {
      response.error(req, res, "Información no valida", 500, err);
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  action
    .deleteUser(id)
    .then(() => {
      response.success(req, res, `User ${id} eliminado`, 200);
    })
    .catch(err => {
      response.error(req, res, "Error interno", 500, err);
    });
});

module.exports = router;
