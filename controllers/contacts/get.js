const { Contact } = require("../../models");
const { ctrlWrapper } = require("../../helpers");

const get = async (req, res) => {
  const { _id } = req.user;
  const result = await Contact.find(
    { owner: _id },
    "-createdAt -updatedAt"
  ).populate("owner", "_id email");
  res.json(result);
};

module.exports = {
  get: ctrlWrapper(get),
};
