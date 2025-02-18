const moment = require("moment");
const isDate = (val) => {
  if (!val) {
    return false;
  }
  const date = moment(val);
  if (date.isValid()) {
    return true;
  }
  return false;
};

module.exports = { isDate };
