const Joi = require('joi');
const dotenv = require('dotenv');

dotenv.config();

const envVarsSchema = Joi.object({
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().required().description('MongoDB url'),
    JWT_SECRET_KEY: Joi.string().description('JWT secret key'),
}).unknown();

const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: 'key' } })
    .validate(process.env);

if (error) {
    console.log("config error : ", error)
}

module.exports = {
    port: envVars.PORT,
    mongodb: {
        url: envVars.MONGODB_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    },
    jwt: {
        secret_key: envVars.JWT_SECRET_KEY
    }
}