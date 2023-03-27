const { Contact } = require("./contact");
const { User } = require("./user");
const { userSchemas } = require("./user");
const { emailSchema } = require("./user");
const { contactSchemas } = require("./contact");

module.exports = { Contact, User, userSchemas, contactSchemas, emailSchema };
