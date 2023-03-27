const { get } = require("./get");
const { getById } = require("./getById");
const { add } = require("./add");
const { updateById } = require("./updateById");
const { deleteById } = require("./deleteById");
const { updateStatusContact } = require("./updateStatusContact");

module.exports = {
  get,
  getById,
  add,
  deleteById,
  updateById,
  updateStatusContact,
};
