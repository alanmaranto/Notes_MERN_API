const express = require('express');
const response = require('../../utils/responses/response');
const router = express.Router();

router.get('/', (req,res) => {
    console.log(req.headers);
    res.send('Lista de notas')
})

module.exports = router;