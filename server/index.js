var fs = require('fs'),
    config = require('./config'),
    GCM = require('gcm').GCM,
    gcm = new GCM(config.APPLICATION_ID),
    message = {
        registration_id: config.REGISTRATION_ID,
        'data.message': 'New user incoming!'
    };

fs.readFile(__dirname + '/user.json', function (err, data) {
    if (err) {
        throw err;
    }

    console.log('Sending notification...');
    message['data.user'] = JSON.stringify(JSON.parse(data));
    gcm.send(message, function (err, messageId) {
        if (err) {
            throw err;
        }

        console.log('Notification sent with id: ' + messageId);
    });
});