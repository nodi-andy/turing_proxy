"use strict";
import * as crypto from "crypto";
import * as dotenv from 'dotenv'
dotenv.config('..')

export function index(req, res) {
    return res.status(200).send("it_works");
}

export function signup(req, res) {
    console.log("SIGNUP CALLED");
    var _req$body = req.body, email = _req$body.email, gender = _req$body.gender, username = _req$body.username, password = _req$body.password, phone = _req$body.phone;
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

export function open_session (req, res) {
    return res.status(200).json({
        success: true,
        message: crypto.randomBytes(16).toString("hex")
    });
};

export function echo (req, res) {
    // console.log("ECHO : " + JSON.stringify(req.body) + JSON.stringify(req.query) + req.body.msg + ".")
    let ret = ''
    if (req.query.msg) {
        ret = req.query.msg
    } else if (req.body) {
        ret = req.body.msg
    }
    // console.log("RET : " + ret);
    return res.status(200).json({
        success: true,
        message: ret
    });
};