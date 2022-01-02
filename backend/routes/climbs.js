const express = require('express');
const router = express.Router();
const climbController = require('../controllers/climbs');
const commentController = require('../controllers/comment');
const { checkAuth } = require('../controllers/auth');

router
    .get('/', climbController.getAllClimbs)
    .post('/', climbController.addClimb);

router
    .get('/:id', climbController.getClimb)
    .put('/:id', climbController.updateClimb)
    .delete('/:id', climbController.deleteClimb)

router
    .post('/:climbId/comments', checkAuth, commentController.addComment)
    
router
    .put('/:id/comments/:commentId', climbController.updateComment)
    .delete('/:id/comments/:commentId', climbController.deleteComment)

module.exports = router;