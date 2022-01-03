const express = require('express');
const router = express.Router();
const climbController = require('../controllers/climbs');
const commentController = require('../controllers/comment');
const { checkAuth } = require('../controllers/auth');

router
    .get('/', climbController.getAllClimbs)
    .post('/', climbController.addClimb)
    .delete('/', climbController.deleteAllClimbs)

router
    .get('/:id', climbController.getClimb)
    // TODO: for testing, remove later
    .get('/:id/comments', commentController.getComments)
    .put('/:id', climbController.updateClimb)
    .delete('/:id', climbController.deleteClimb)

router
    .post('/:climbId/comments', checkAuth, commentController.addComment)
    
router
    .put('/:id/comments/:commentId', commentController.updateComment)
    .delete('/:id/comments/:commentId', commentController.deleteComment)

module.exports = router;