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
  },
  opensession: function signup(req, res) {
    console.log("NEW SESSION");
    var _req$body = req.body;
    var n_user = _req$body.n_user;
    var newSession = {
        n_user: n_user,
    };
    return res.status(200).json({
      success: true,
      message: "New session created"
    });
  }
};