import { validator } from '../helpers/validate.js';

export const signup = async (req, res, next) => {
    const validationRule = {
        "email": "required|string|email|exist:User,email",
        "username": "required|string|exist:User,username",
        "phone": "required|string",
        "password": "required|string|min:6|confirmed|strict",
    }

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    });
}

export const opensession = async (req, res, next) => {
    const validationRule = {
        "n_user": "required|integer",
    }

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Wrong number of users',
                    data: err
                });
        } else {
            next();
        }
    });
}