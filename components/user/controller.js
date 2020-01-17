const express = require('express');
const response = require('../../utils/responses/response');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('Lista de usuarios')
})

module.exports = router;