const express = require('express');

const router = express.Router();
//sample array to hold users
const users = [{ id: 01, name: "Lokar", lvl: 2 }, { id: 02, name: "Lokaria", lvl: 1 }]

router.get('/', (req, res) => {
    res.send(users);
});

module.exports = router;
