const Joi = require('joi');

// To validate order input parameters
function ValidateOrderInputs(orderObject) {

    const scheme = Joi.object({
        orderNumer: Joi.number().min(3).required(),
        customerName: Joi.string().min(3).required()
    });

    const result = scheme.validate(orderObject);

    return result;

}

module.exports = ValidateOrderInputs;