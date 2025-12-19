const sanitizeHtml = require("sanitize-html");

function sanitize(input) {
  return sanitizeHtml(input, {
    allowedTags: [],
    allowedAttributes: {},
  });
};

module.exports = sanitize;