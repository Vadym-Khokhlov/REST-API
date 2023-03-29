const express = require("express");

const { authCtrl } = require("../../controllers");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { userSchemas, emailSchema } = require("../../models");

const router = express.Router();

router.post(
  "/register",
  validateBody(userSchemas.registerSchema),
  authCtrl.register
);

router.get("/verify/:verificationToken", authCtrl.verifyEmail);

router.post("/verify", validateBody(emailSchema), authCtrl.resendVerifyEmail);

router.post("/login", validateBody(userSchemas.loginSchema), authCtrl.login);

router.get("/current", authenticate, authCtrl.getCurrent);

router.post("/logout", authenticate, authCtrl.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  authCtrl.updateAvatar
);

module.exports = router;
