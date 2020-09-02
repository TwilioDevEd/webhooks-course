/**
 * A handler that accepts an incoming text message and modifies a LiFX lamp. 
 * See README.md
 */
const axios = require("axios");

exports.handler = async (context, event, callback) => {
    const twiml = new Twilio.twiml.MessagingResponse();
    const instruction = event.Body.toLowerCase();
    console.log(`Instruction is ${instruction}`);
    const headers = {
        Authorization: `Bearer ${context.LIFX_TOKEN}`
    };
    const config = {headers};

    const params = {};
    if (instruction === 'off') {
        params.power = 'off';
    } else {
        // Always turn the light on
        params.power = 'on';
        if (instruction !== 'on') {
            // Assume it's a color
            params.color = instruction;
        }
    }

    const paramBody = new URLSearchParams(params).toString();
    console.log("paramBody", paramBody);

    try {
        const response = await axios.put(
            `https://api.lifx.com/v1/lights/id:${context.LIFX_LIGHT_ID}/state`,
            // If you pass a string it is assume www-url-encoded
            paramBody,
            config
        );
        twiml.message(`Thanks! Your change ${event.Body} has been sent`);
    } catch(err) {
        console.error("Whoops", err);
        callback(err);
    }
    return callback(null, twiml);
};