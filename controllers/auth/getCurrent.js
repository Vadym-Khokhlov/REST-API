const getCurrent = async (req, res, next) => {
  try {
    const { email, subscription } = req.user;
    res.status(200).json({ email, subscription });
  } catch (error) {
    return res.status(401).json({ message: "Not authorized" });
  }
};

module.exports = getCurrent;
