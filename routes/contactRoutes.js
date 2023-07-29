const express = require("express");
const Router = express.Router();
const {getContacts} = require ("../controllers/contactControllers");
const {createContact} = require ("../controllers/contactControllers");
const {getContact} = require ("../controllers/contactControllers");
const {putContact} = require ("../controllers/contactControllers");
const {deleteContact} = require ("../controllers/contactControllers");


Router.route("/todos").get(getContacts).post(createContact);
Router.route("/:id").get(getContact).put(putContact).delete(deleteContact);

module.exports = Router;