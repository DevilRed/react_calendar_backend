const Event = require("../models/Event");

const getEvents = async (req, res) => {
  const events = await Event.find()
    // get document relation, specify fields to be returned
    .populate("user", "name");
  res.json({
    ok: true,
    events,
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

const updateEvent = async (req, res) => {
  const eventId = req.params.id;
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: "Event not found",
      });
    }
    // check event owner
    //  event.user is an objectId, use toString() to compare it with the req.uid
    if (event.user.toString() !== req.uid) {
      return res.status(401).json({
        ok: false,
        msg: "You don't have the privilege to edit this event",
      });
    }
    const newEvent = {
      ...req.body,
      user: req.uid,
    };
    const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, {
      new: true,
    }); // new true to return the updated event
    res.json({
      ok: true,
      event: updatedEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
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
