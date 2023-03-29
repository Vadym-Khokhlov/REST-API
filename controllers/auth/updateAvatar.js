const path = require("path");
const fs = require("fs/promises");
const avatarDir = path.join(__dirname, "../../", "public", "avatars");
const { User } = require("../../models");
const { resizer } = require("../../helpers");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;

  const filename = `${_id}_${originalname}.jpg`;
  const resultUpload = path.join(avatarDir, filename);

  await resizer(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;
