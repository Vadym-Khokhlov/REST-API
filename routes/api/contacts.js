const express = require("express");
const router = express.Router();

const { contactsCtrl } = require("../../controllers");
const { validateBody, authenticate, isValidId } = require("../../middlewares");
const {
  addSchema,
  updateSchema,
  updateFavoriteSchema,
} = require("../../models/index");

router.get("/list", authenticate, contactsCtrl.get);

router.get("/:contactId", authenticate, isValidId, contactsCtrl.getById);

router.post("/", authenticate, validateBody(addSchema), contactsCtrl.add);

router.delete("/:contactId", authenticate, isValidId, contactsCtrl.deleteById);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(updateSchema),
  contactsCtrl.updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(updateFavoriteSchema),
  contactsCtrl.updateStatusContact
);

module.exports = router;
