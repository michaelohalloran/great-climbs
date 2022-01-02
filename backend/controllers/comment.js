const Comment = require('../models/Comment');
const Climb = require('../models/Climb');

const addComment = async(req, res) => {
    const {text, rating} = req.body;
    const {climbId} = req.params;
    const climb = await Climb.findById(climbId);
    if (!climb) {
        return res.status(404).json({status: 'fail', msg: 'No such climb'});
    }
    const newComment = new Comment({text, rating});
    // TODO: fix
    newComment.climb = climb;
    console.log('climb: ', climb)
    climb.comments = (climb.comments || []).push(newComment);
    newComment.user = req.user;
    console.log('req user: ', req.user);
    req.user.comments = (req.user.comments || []).push(newComment);
    await req.user.save();
    await climb.save();
    await newComment.save();
}

const updateComment = async(req, res) => {
    const {id} = req.params;
    const comment = await Comment.findById(id);
    if (!comment) {
        return res.status(404).json({
            status: 'fail',
            msg: 'No such comment'
        });
    }
    // TODO: if (comment.user !== req.user.id) {}
    // verify logged in user owns this comment
}

const deleteComment = async(req, res) => {
    // verify logged in user owns this comment
}



module.exports = {
    addComment, updateComment, deleteComment
};