const express = require('express');
const { userController } = require('../../controllers');
const { userValidation } = require('../../validation');
const validate = require('../../middleware/validate');
const autheticate = require('../../middleware/auth');

const router = express.Router();

/** Register */
router.post(
    "/register",
    validate(userValidation.Register),
    userController.Register
)

/** Login */
router.post(
    "/login",
    autheticate,
    userController.Login
)

/** Get user */
router.get(
    "/user-list",
    autheticate,
    userController.getUserList
)

/** Get user details by id */
router.get(
    "/user-details/:userId",
    userController.getUserDetails
)

/** update user */
router.put(
    "/update-details/:userId",
    userController.updateDetails
)

/** Delete user */
router.delete(
    "/user-delete/:userId",
    userController.deleteUser
)

module.exports = router;
