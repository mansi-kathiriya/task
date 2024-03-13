const Joi = require("joi");

/** Register */
const Register = {
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim(),
        phone_no: Joi.number().required(),
    }),
};

module.exports = {
    Register,
};