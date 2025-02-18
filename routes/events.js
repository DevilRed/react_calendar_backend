/**
 * route prefix: /api/events
 */

const express = require("express");
const { validateJWT } = require("../middlewares/validate-jwt");
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
router.post("/", addEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
