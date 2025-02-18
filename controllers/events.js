const Event = require("../models/Event");

const getEvents = (req, res) => {
  res.json({
    ok: true,
    msg: "getEvents",
  });
};

const addEvent = async (req, res) => {
  const event = new Event(req.body);
  try {
    event.user = req.uid;
    const savedEvent = await event.save();
    res.json({
      ok: true,
      event: savedEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const updateEvent = (req, res) => {
  res.json({
    ok: true,
    msg: "updateEvent",
  });
};

const deleteEvent = (req, res) => {
  res.json({
    ok: true,
    msg: "deleteEvent",
  });
};

module.exports = {
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent,
};
