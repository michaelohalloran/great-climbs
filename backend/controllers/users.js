const User = require('../models/User');


// only runs after successful checkAuth, so req.user must exist
const getOwnProfile = async(req, res) => {
    res.send(req.user);
}

// TODO: res.json({status: 'Success', data})
const signup = async (req, res) => {
    const { email, name, password, passwordConfirm } = req.body;
    const missingField = !email || !password || !passwordConfirm || !name;
    if (missingField) {
        return res.status(422).json({msg: 'Missing required field'});   
    }
    const user = await User.findOne({email});
    if (user) {
        return res.status(422).json({msg: 'User already exists'});
    } 
    if (password !== passwordConfirm) {
        return res.status(422).json({msg: 'Passwords must match'});
    }
    const newUser = new User({email, name, password, passwordConfirm});
    const token = await newUser.generateAuthToken();
    return res.status(201).json({newUser, token});
}

const login = async(req, res) => {
    // TODO: prevent brute force attacks w/ max login attempts
    // check user name
    const {email, password} = req.body;
    try {
        const user = await User.findUser(email, `${password}`); // stringify pw to handle edge case where pw is number
        if (!user) {
            return res.status(401).json({msg: 'Invalid credentials'});
        }
        // TODO: test select const user = await User.findUser(email, password).select('+password');
        const token = await user.generateAuthToken();
        return res.status(200).json({
            status: 'success',
            data: {user, token}
        });
    } catch(err) {
        return res.status(401).json({status: 'fail', msg: 'Invalid credentials'});
    }
}
const logout = async(req, res) => {
    try {
        // remove token
        const { token } = req;
        req.user.tokenList = req.user.tokenList.filter(userToken => userToken!== token);
        await req.user.save();
        return res.status(200).json({msg: 'User logged out'});
    } catch(err) {
        return res.status(400).json({msg: 'Something went wrong!'});
    }
}

const logoutAll = async(req, res) => {
    try {
        req.user.tokenList = [];
        await req.user.save();
        return res.status(200).json({msg: 'Logged out of all sessions'})
    } catch(err) {
        return res.status(400).json({msg: 'Something went wrong!'});
    }
}

const getAllUsers = async(req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json({
            status: 'Success',
            results: users.length,
            users
        })
    } catch(err) {
        return res.status(500).json({msg: 'Something went wrong'});
    }
}

const deleteUser = async(req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        return res.status(204).json({msg: 'Deleted user'});

    } catch(err) {
        return res.status(404).json({msg: 'User not found'})
    }
}


module.exports = {signup, login, logout, logoutAll, getOwnProfile, getAllUsers, deleteUser};