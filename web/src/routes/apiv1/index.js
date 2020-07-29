import {postCollection} from '../../mongoosehelpers'
import { Datapoint } from '../../dbConfigs/schemas/datapoint';

export async function get(req,res){

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
        },
    });

};

export function post(req,res){
    // return the request body
    res.json({
        message: `POST request`,
        payload: req.body
    });
};

export function put(req,res){
    // return the request body
    res.json({
        message: `PUT request`,
        payload: req.body
    });
};

export function del(req,res){
    //
    res.json({
        message: 'DEL request',
        payload: req.body,
        field: Math.floor(Math.random() * 100)
    }
    );
}