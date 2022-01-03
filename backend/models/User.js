const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');


// TODO: add validators
// TODO: img or gravatar
// https://www.npmjs.com/package/validator
// https://mongoosejs.com/docs/validation.html
const userSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            trim: true,
            required: [true, 'Username is required']
        },
        email: {
            type: String,
            unique: true,
            trim: true,
            lowercase: true,
            required: [true, 'Email is required'],
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Valid email required');
                }
            }
        },
        password: {
            type: String,
            min: [6, 'Password must be at least 6 characters'],
            required: [true, 'Password is required'],
            select: false
        },
        // comments: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'Comment'
        // },
        // TODO: ?
        tokenList: [
            {
                token: {type: String}
            }
        ]
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

userSchema.methods.toJSON = function() {
    const user = this.toObject();
    delete user.password;
    delete user.tokenList;
    return user;
}

userSchema.methods.generateAuthToken = async function() {
    const user = this;
    const token = jwt.sign({
        _id: user._id.toString()
    }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});
    user.tokenList.push({token});
    // TODO: seems to fail here:
// https://duckduckgo.com/?q=mongoose+Cast+to+ObjectId+failed+for+value&atb=v237-1&ia=web&iai=r1-0&page=1&sexp=%7B%22biaexp%22%3A%22b%22%2C%22msvrtexp%22%3A%22b%22%2C%22mliexp%22%3A%22b%22%2C%22uxexp%22%3A%22a%22%7D

    // https://stackoverflow.com/questions/24847656/how-to-define-arrays-of-objects-in-mongoose
    // lat-lng ex: https://stackoverflow.com/questions/19695058/how-to-define-object-in-array-in-mongoose-schema-correctly-with-2d-geo-index
    // https://stackanswers.net/questions/how-to-set-up-mongoose-schema-to-store-an-array-of-objects-in-mongodb
    // https://mongoosejs.com/docs/subdocs.html
    // https://cmsdk.com/node-js/how-to-save-array-of-objects-in-mongodb-with-mongoose.html

    await user.save();
    return token;
}

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) { // i.e. when user is new or updated
        const hashedPw = await bcrypt.hash(user.password, 12);
        user.password = hashedPw;
    }
    next();
});

// TODO: pw changed method (v131)


// userSchema.methods.checkPassword = (pwAttempt) => {
userSchema.methods.checkPassword = async function(pwAttempt) {
    const user = this;
    // TODO: if select is false above, user.password won't be available
    // console.log('pw: ', pwAttempt, 'userpw: ', user.password);
    const isMatch = await bcrypt.compare(pwAttempt, user.password);
    // TODO: fix, this isn't being reached/logged
    return isMatch;
}

userSchema.statics.findUser = async (email, pw) => {
    const foundUser = await User.findOne({email}).select('+password');
    if (!foundUser) {
        throw new Error('Invalid login');
    }
    // const isMatch = await bcrypt.compare(pw, foundUser.password);
    const pwMatch = await foundUser.checkPassword(pw);
    if (!pwMatch) {
        throw new Error('Invalid login')
    }
    return foundUser;
}

const User = mongoose.model('User', userSchema);
module.exports = User;