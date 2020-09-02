const axios = require("axios");

exports.handler = async (context, event, callback) => {
    const msg = {};
    const headers = {
        Authorization: `Bearer ${context.LIFX_TOKEN}`
    };
    const config = {headers};

    const gitHubLinkColor = "#0366d6"; 
    const gitHubButtonColor = "#2ea44f";

    const params = {
        period: 0.5,
        cycles: 5,
        color: gitHubLinkColor,
        from_color: gitHubButtonColor,
    };

    const paramBody = new URLSearchParams(params).toString();
    console.log("paramBody", paramBody);

    try {
        const response = await axios.post(
            `https://api.lifx.com/v1/lights/id:${context.LIFX_LIGHT_ID}/effects/pulse`,
            // If you pass a string it is assume www-url-encoded
            paramBody,
            config
        );
    } catch(err) {
        console.error("Whoops", err);
        callback(err);
    }
    return callback(null, msg);
};