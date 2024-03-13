const express = require("express");
const { adminValidation } = require("../../validation");
const { adminController } = require("../../controllers");
const validate = require("../../middleware/validate");

const router = express.Router();

/** Create admin */
router.post(
    "/create-admin",
    validate(adminValidation.createAdmin),
    adminController.createAdmin
);

/** Get admin list */
router.get(
    "/admin-list",
    adminController.getAdminList
);

/** Get admin details by id */
router.get(
    "/admin-details/:adminId",
    adminController.getAdminDetails,
);

/** Update Admin */
router.put(
    "/update-details/:adminId",
    adminController.updateDetails,
);

/** Delete admin */
router.delete(
    "/admin-delete/:adminId",
    adminController.deleteAdmin,
);

module.exports = router;