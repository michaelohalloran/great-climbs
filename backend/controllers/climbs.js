const Climb = require('../models/Climb');

const REQUIRED_FIELDS = ['name', 'altitude', 'avgGrade', 'distance', 'location',
'latitude', 'longitude'];
const OTHER_ALLOWED_FIELDS = ['rating', 'price', 'guide', 'isAvailable'];

// TODO: async wrapper

// Helper to validate request body
const getValidatedClimb = (requestBody) => {
    const requestFields = Object.keys(requestBody);
    return requestFields.reduce((validated, field) => {
        const isAllowedField = [...REQUIRED_FIELDS, ...OTHER_ALLOWED_FIELDS].includes(field);
        if (isAllowedField) {
            validated[field] = requestBody[field];
        }
        return validated;
    }, {});
} 


// get all climbs
const getAllClimbs = async (req, res, next) => {
    try {
        const climbs = await Climb.find();
        res.status(200).json({status: 'Success', results: climbs.length, climbs});
    } catch(err) {
        res.status(400).json({err});
    }
}

// get single climb
const getClimb = async(req, res, next) => {
    try {
        const {id} = req.params;
        const climb = await Climb.findById(id).populate('comments');
        if (!climb) {
            return res.status(404).json({message: 'Climb not found'});
        }
        return res.status(200).json({climb});
    } catch(err) {
        res.status(400).json({err});
    }
}

// post new climb
const addClimb = async(req, res) => {
    // TODO: add validation
    const requestFields = Object.keys(req.body);
    const missingField = REQUIRED_FIELDS.some(field => !requestFields.includes(field));
    if (missingField) {
        throw new Error('Missing required fields');
    }

    const climbData = getValidatedClimb(req.body);
    const newClimb = new Climb(climbData);
    try {
        await newClimb.save();
        return res.status(201).json(newClimb);
    } catch(err) {
        return res.status(400).json({message: 'Could not save climb'});
    }

}

// update a climb
const updateClimb = async(req, res) => {
    const updates = getValidatedClimb(req.body);
    try {
        await Climb.findByIdAndUpdate(req.params.id, updates, {new: true, runValidators: true});
        return res.status(201).json({msg: 'Update succeeded!'})
    } catch(err) {
        return res.status(400).json({message: 'Could not update climb'});
    }
}

// delete a climb
const deleteClimb = async(req, res) => {
    try {
        await Climb.findByIdAndDelete(req.params.id);
        return res.status(204).json({msg: 'Deleted'});
    } catch(err) {
        return res.status(400).json({message: 'Failed to delete climb'});
    }
}

// TODO: protect this and above routes, require admin
const deleteAllClimbs = async(req, res) => {
    try {
        await Climb.deleteMany();
        return res.status(204).json({msg: 'Deleted all'});
    } catch(err) {
        return res.status(400).json({message: 'Failed to delete climbs'});
    }
}


module.exports = {
    getAllClimbs, getClimb, addClimb, updateClimb, deleteClimb, deleteAllClimbs
};