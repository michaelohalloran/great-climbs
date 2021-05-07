const express = require('express');
const router = express.Router();
const climbController = require('../controllers/climbs');

router
    .get('/', climbController.getAllClimbs)
    .post('/', climbController.addClimb);

router
    .get('/:id', climbController.getClimb)
    .put('/:id', climbController.updateClimb)
    .delete('/:id', climbController.deleteClimb)

module.exports = router;