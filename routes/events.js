/**
 * route prefix: /api/events
 */

const express = require("express");
const { validateJWT } = require("../middlewares/validate-jwt");
const { validateFields } = require("../middlewares/field-validator");
const { isDate } = require("../helpers/isDate");
const { check } = require("express-validator");
const {
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");
const router = express.Router();
// set middleware to all routes
router.use(validateJWT);

router.get("/", getEvents);
router.post(
  "/",
  [
    check("title", "title is required").not().isEmpty(),
    check("start", "start date is required").custom(isDate),
    check("end", "end date is required").custom(isDate),
    validateFields,
  ],
  addEvent
);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
