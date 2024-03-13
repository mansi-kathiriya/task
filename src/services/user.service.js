const { User } = require("../models");

const register = async (reqBody) => {
    return User.create(reqBody);
};

const login = async (email) => {
    return User.findOne({ email });
};

/** Get user by email */
const getUserByEmail = async (email) => {
    return User.findOne({ email });
};

/** get user List */
const getUserList = async () => {
    return User.find()
};

/** Get user deatils by id */
const getUserById = async (userId) => {
    return User.findById(userId);
}

/** user details update by id */
const updateDetails = async (userId, updateBody) => {
    return User.findByIdAndUpdate(userId, { $set: updateBody });
}

/** Delete user */
const deleteUser = async (userId) => {
    return User.findByIdAndDelete(userId);
}

module.exports = {
    register,
    login,
    getUserList,
    getUserByEmail,
    getUserById,
    updateDetails,
    deleteUser
};