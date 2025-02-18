const getEvents = (req, res) => {
  res.json({
    ok: true,
    msg: "getEvents",
  });
};

const addEvent = (req, res) => {
  res.json({
    ok: true,
    msg: "addEvent",
  });
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
