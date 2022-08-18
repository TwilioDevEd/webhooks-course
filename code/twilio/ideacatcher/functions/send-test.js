exports.handler = (context, event, callback) => {
    console.log("Sending text...");
    console.log(`Transcription text: ${event.TranscriptionText}`);

    const client = context.getTwilioClient();
    client.messages.create({
        to: context.PHONE_NUMBER,
        from: context.TWILIO_NUMBER,
        body: `New idea: ${event.TranscriptionText}`
    }).then(message => {
        callback(null,`Sent message: ${message.sid}`);
    }).catch((error) => {
        callback(error);
    });

};