const Jimp = require("jimp");
const fs = require("fs/promises");

const resizer = async (tempPath, resultPath) => {
  const avatar = await Jimp.read(tempPath);
  avatar.resize(250, 250);
  await avatar.writeAsync(resultPath);
  await fs.unlink(tempPath);
};
module.exports = resizer;
