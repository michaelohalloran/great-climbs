const jwt = require('jsonwebtoken');
const User = require('../models/User');

/**
 * 1. Get bearer token from header
 * 2. Decode/verify it
 * 3. Find user who has that token
 * 4. Attach this user to the request object
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const checkAuth = async(req, res, next) => {
    let token;
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.replace('Bearer ', '');
        }
        if (!token) {
            throw new Error();
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // TODO: check if user whose token this is still exists
        const userId = decoded._id;
        // TODO: check if token is in tokenList
        // https://duckduckgo.com/?q=mongoose+findOne+array&atb=v237-1&ia=web&iai=r1-1&page=1&sexp=%7B%22biaexp%22%3A%22b%22%2C%22msvrtexp%22%3A%22b%22%2C%22mliexp%22%3A%22b%22%7D
        // https://kb.objectrocket.com/mongo-db/use-mongoose-to-find-in-an-array-of-objects-1206
        // const foundUser = await User.findOne({_id: userId, 'tokenList.token': token});
        const foundUser = await User.findOne({_id: userId});
        if (!foundUser) {
            throw new Error();
        }
    
        // TODO: if he does, check his pw didn't change

        req.token = token; // to allow later logout
        req.user = foundUser;
    
        next();

    } catch(err) {
        return res.status(401).send('Please authenticate');
    }
}

module.exports = {checkAuth};