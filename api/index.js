const express = require('express');
const router = express.Router();
router.get('/details/:id/:name', function (req, res) {
  const name = req.params.name;
  const id = req.params.id;

res.send(name+id);
});



module.exports = router;
