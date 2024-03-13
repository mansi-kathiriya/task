const { adminService } = require("../services");

/** Create Admin */
const createAdmin = async (req, res) => {
    try {
        const reqBody = req.body;

        const adminExists = await adminService.getAdminByEmail(reqBody.email);
        if (adminExists) {
            throw new Error("User already craeted by this email!");
        }

        const admin = await adminService.createAdmin(reqBody);

        res.status(200).json({
            success: true,
            message: "Admin create successfully!",
            data: { admin }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Admin list */
const getAdminList = async (req, res) => {
    try {
        const getList = await adminService.getAdminList();

        res.status(200).json({
            success: true,
            message: "Get Admin list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Get Admin details by id */
const getAdminDetails = async (req, res) => {
    try {
        const getDetails = await adminService.getAdminById(
            req.params.adminId
        )
        if (!getDetails) {
            throw new Error("Admin not found!");
        }

        res.status(200).json({
            success: true,
            message: "Admin details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Update Admin */
const updateDetails = async (req, res) => {
    try {
        const adminId = req.params.adminId;

        const adminExists = await adminService.getAdminById(adminId);
        if (!adminExists) {
            throw new Error("Admin not found!")
        }

        await adminService.updateDetails(adminId, req.body);

        res.status(200).json({
            success: true,
            message: "Admin details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

/** Delete Admin */
const deleteAdmin = async (req, res) => {
    try {
        const adminId = req.params.adminId;

        const adminExists = await adminService.getAdminById(adminId);
        if (!adminExists) {
            throw new Error("Admin not found!")
        }

        await adminService.deleteAdmin(adminId);

        res.status(200).json({
            success: true,
            message: "Admin delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createAdmin,
    getAdminList,
    getAdminDetails,
    updateDetails,
    deleteAdmin
};