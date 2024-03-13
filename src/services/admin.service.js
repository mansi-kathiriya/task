const { Admin } = require("../models");

/** Create admin */
const createAdmin = async (reqBody) => {
    return Admin.create(reqBody);
};

/** get Admin List */
const getAdminList = async (filter, options) => {
    return Admin.find()
};

/** Get admin by email */
const getAdminByEmail = async (email) => {
    return Admin.findOne({ email });
};

/** Get admin deatils by id */
const getAdminById = async (adminId) => {
    return Admin.findById(adminId);
}

/** admin details update by id */
const updateDetails = async (adminId, updateBody) => {
    return Admin.findByIdAndUpdate(adminId, { $set: updateBody });
}

/** Delete Admin */
const deleteAdmin = async (adminId) => {
    return Admin.findByIdAndDelete(adminId);
}

module.exports = {
    createAdmin,
    getAdminList,
    getAdminByEmail,
    getAdminById,
    updateDetails,
    deleteAdmin,
};