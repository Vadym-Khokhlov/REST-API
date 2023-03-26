const express = require("express");
const router = express.Router();

const { contactsCtrl } = require("../../controllers");
const { validateBody, authenticate, isValidId } = require("../../middlewares");
const { contactSchemas } = require("../../models");

router.get("/list", authenticate, contactsCtrl.get);

router.get("/:contactId", authenticate, isValidId, contactsCtrl.getById);

router.post(
  "/",
  authenticate,
  validateBody(contactSchemas.addSchema),
  contactsCtrl.add
);

router.delete("/:contactId", authenticate, isValidId, contactsCtrl.deleteById);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(contactSchemas.updateSchema),
  contactsCtrl.updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(contactSchemas.updateFavoriteSchema),
  contactsCtrl.updateStatusContact
);

module.exports = router;
