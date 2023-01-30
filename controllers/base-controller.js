"use strict";

module.exports = {
  index: function index(req, res) {
    return res.status(200).json({
      success: true,
      message: "Hi ya! :)"
    });
  },
  signup: function signup(req, res) {
    console.log("SIGNUP CALLED");
    var _req$body = req.body,
        email = _req$body.email,
        gender = _req$body.gender,
        username = _req$body.username,
        password = _req$body.password,
        phone = _req$body.phone;
    var newUserObj = {
      email: email,
      gender: gender,
      username: username,
      password: password,
      phone: phone
    };
    return res.status(200).json({
      success: true,
      message: "signup successful"
    });
  }
};