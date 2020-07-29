import { Schema, model } from 'mongoose';

const DatapointSchema = Schema({
    timestamp: { type: Date, default: new Date(), required: true },
    datatype: { type: String, required: true },
    payload: { type: Object, required: true },
    moduleid: { type: String, required: true },
})

export const Datapoint = model("datapoint", DatapointSchema );