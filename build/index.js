"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.listen(4000);
app.get("/", function (req, res) {
  res.status(200).json({
    message: "Welcome to shops and orders API"
  });
});
console.log("Server listen on port", 4000);