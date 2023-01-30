
const SALT_WORK_FACTOR = 10;

const UserSchema = {
    username: {
        type: 'string',
        required: true,
        unique: true,
    },
    
    password: {
        type: 'string',
        required: true
    },
    
    email: {
        type: "string",
        required: true,
        unique: true
    },

    phone: {
        type: "string",
        required: true,
    },

    gender: {
        type: "string"
    }

};


module.exports = UserSchema;
