export const get = (req,res) => {

    // A function that runs every time you hit this endpoint
    const sampleEmoji = () => {
        let emojis = ['🦐','🍰','😴','🙄','🎀','🍬','🎳','🩰','🥯'];
        let index = Math.floor(Math.random()*(emojis.length));
        return emojis[index]
    }

    // Response of the GET request
    res.json({
        message: `GET request`,
        payload: {
            timestamp: new Date(),
            random_emoji: sampleEmoji()
        }
    });
};

export const post = (req,res) => {
    // return the request body
    res.json({
        message: `POST request`,
        payload: req.body
    });
};

export const put = (req,res) => {
    // return the request body
    res.json({
        message: `PUT request`,
        payload: req.body
    });
}