"use strict";
import { Configuration, OpenAIApi } from "openai";
import * as crypto from "crypto";
import * as dotenv from 'dotenv'
dotenv.config('..')
let config = {
    "prompt" : 'Bob tries to imitate a chat bot but he is a human. You are a astute AI analyzer and you ask a question which shall detect how good is Bob by imitating a chat bot.',
    "model": "text-davinci-003",
    "temperature": 0.7,
    "stop": null,
    "max_tokens": 128
}

let chatHistory = []
let openai = null;
var aiName = String.fromCharCode(Math.floor(Math.random()*26) + 64)

function setupOpenAI(key) {
    console.log (process.env.OPENAI_API_KEY);
    const configuration = new Configuration({
        apiKey: key,
      });
    
    openai = new OpenAIApi(configuration);
    console.log("openAI started")
}

setupOpenAI(process.env.OPENAI_API_KEY)


export async function complete (req, res) {
    if (res == null) return;

    //console.log("complete started" + '\r\n' + JSON.stringify(config) + ' ' + JSON.stringify(res))
    const response = await openai.createCompletion(config);
//    const agentText = 'ABC';
    const agentText = response.data.choices[0]?.text?.trim() || res.status(200).json(reply);


    if (res.status) {
        return res.status(200).json({
            success: true,
            message: agentText
        });
    } else {
        return res({success: true, message: agentText});
    }
};

export async function set_config (req, res) {
    if (req.query.key) {
        setupOpenAI(req.query.key)
    }
    if (req.query.prompt) config.prompt = req.query.prompt
    if (req.query.model) config.model = req.query.model
    if (req.query.max_tokens) config.max_tokens = req.query.max_tokens
    if (req.query.temperature) config.temperature = req.query.temperature
    if (req.query.stop) config.stop = req.query.stop

    return res.status(200).json({
        success: true,
        message: JSON.stringify(config)
    });
};

export async function chat_clear (req, res) {
    chatHistory = []
    return res.status(200).json({
        success: true,
        message: 'chat_cleared'
    });
}

export async function chat_history (req, res) {
    return res.status(200).json({
        success: true,
        message: JSON.stringify(chatHistory)
    });
}

export async function chat (req, res) {
    let newMessage = {user: '', txt: ''}
    if (req.query.user) {
        newMessage.user = req.query.user
    } else if (req.body) {
        newMessage.user = req.body.user
    }
    if (req.query.msg) {
        newMessage.txt = req.query.msg
    } else if (req.body) {
        newMessage.txt = req.body.msg
    }
    chatHistory.push(newMessage);

    let chatPrompt = ''
    for(let iMessage = 0; iMessage < chatHistory.length; iMessage++) {
        let chatEntry = chatHistory[iMessage]
        if (chatEntry.user) {
            chatPrompt += chatEntry.user + ': ';
        }
        chatPrompt += chatEntry.txt + '\r\n';
    }
    
    config.prompt = chatPrompt
    const response = await openai.createCompletion(config);
    var agentText = response.data.choices[0]?.text?.trim() || res.status(200).json(reply);
    if (agentText.startsWith("AI: ")) agentText = agentText.slice(4)
    chatPrompt += agentText + '\r\n';
    chatHistory.push({user: aiName, txt: agentText})
    console.log("CHAT : " + chatPrompt );

    if (res.status) {
        return res.status(200).json({
            success: true,
            message: agentText
        });
    } else {
        return res({success: true, message: agentText});
    }
};