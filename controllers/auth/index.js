const login = require("./login");
const logout = require("./logout");
const register = require("./register");
const getCurrent = require("./getCurrent");
const { ctrlWrapper } = require("../../helpers");

module.exports = {
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  register: ctrlWrapper(register),
  getCurrent: ctrlWrapper(getCurrent),
};
