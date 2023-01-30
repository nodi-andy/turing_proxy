"use strict";
import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config('..')
console.log (process.env.OPENAI_API_KEY);
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

const openai = new OpenAIApi(configuration);

export function index(req, res) {
    return res.status(200).json({
        success: true,
        message: "Hi ya! :)"
    });
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
export const opensession = async function signup(req, res) {

    const config = {
        "provider": "openai",
        "model": "text-davinci-003",
        "temperature": 0.7,
        "stop": null,
        "max_tokens": 128
    }
    let prompt = 'Bob tries to imitate a chat bot but he is a human. You are a astute AI analyzer and you ask a question which shall detect how good is Bob by imitating an chat bot.'
    const params = {
        prompt,
        model: config.model,
        max_tokens: config.max_tokens,
        temperature: config.temperature,
        stop: config.stop,
      };
    const response = await openai.createCompletion(params);
    const agentText = response.data.choices[0]?.text?.trim() || res.status(200).json(reply);

    console.log("NEW SESSION");
    var _req$body = req.body;
    var n_user = _req$body.n_user;
    var newSession = {
        n_user: n_user,
    };
    return res.status(200).json({
        success: true,
        message: agentText
    });
};