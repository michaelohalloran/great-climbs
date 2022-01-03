const Comment = require('../models/Comment');
const Climb = require('../models/Climb');

const addComment = async(req, res) => {
    const {text, rating} = req.body;
    const {climbId} = req.params;

    try {
        const climb = await Climb.findById(climbId);
        if (!climb) {
            return res.status(404).json({status: 'fail', msg: 'No such climb'});
        }
        // Make new comment, then associate it to both the climb and the user making it
        const newComment = new Comment({text, rating});
        // console.log('newCom before: ', newComment);
        newComment.climb = climb.id;
        newComment.user = req.user.id;
        // console.log('newCom AFTER: ', newComment);
        // console.log('climb before: ', climb);
        // climb.comments = (climb.comments || []).concat(newComment.id);
        // console.log('climb AFTER: ', climb);
        // console.log('req user before: ', req.user);
        // req.user.comments = (req.user.comments || []).concat(newComment.id);
        // console.log('req user AFTER: ', req.user);
        // console.log('CLIMB AFTER: ', climb);
        // console.log('newCom: ', newComment);
        // await climb.save();
        // await newComment.save();
        // await req.user.save();
        // const promises = [climb.save(), newComment.save(), req.user.save()];
        // await Promise.all(promises);
        await newComment.save();
        return res.status(201).json({status: 'success', data: {newComment}});
    } catch (err) {
        // TODO: fix this to catch each of possible error
        console.log('err: ', err);
        return res.status(500).json({status: 'fail', msg: `Something went wrong`, err});
    }

}

const getComments = async(req, res) => {
    try {
        // const climbId = req.params.id;
        console.log('req params: ', req.params.id);
        const comments = await Comment.find({});
        console.log('after?');
        return res.status(200).json({status: 'success', data: {comments}});

    } catch(err) {
        console.log('err: ', err);
        return res.status(404).json({status: 'fail', msg: 'Cannot get comments', err});
    }
}

// const updateComment = async(req, res) => {
//     const climb = await Climb.findById(req.params.id);
//     // TODO: add
//     if (!climb) {
//         return res.status(404).json({msg: 'Climb does not exist'});
//     }
//     const comment = climb.comments.find(comment => comment.id === req.params.commentId);
//     if (!comment) {
//         return res.status(404).json({msg: 'Comment does not exist'});
//     }


// }

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
    addComment, updateComment, deleteComment, getComments
};