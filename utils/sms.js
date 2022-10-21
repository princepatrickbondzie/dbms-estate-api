const got = require('got');

const sendSMS = async (recipient, message) => {
    const data = {
        sender: "EstateWatch",
        recipient: recipient,
        message: message,
    };

    try {
        const response = await got.post(`?key=${process.env.AUTH_KEY}`, {
            prefixUrl: process.env.SMS_PROVIDER_URL,
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify(data),
            retry: { limit: 3 },
        })

        if (response.body) {
            const res = {
                message: 'sms sent to user',
                status: 200,
            };

            return JSON.parse(response.body);
        }
    } catch (err) {
        console.error(err);
    }
}

module.exports = { sendSMS }