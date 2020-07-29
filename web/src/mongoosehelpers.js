import mongoose from 'mongoose'
import { Datapoint } from './dbConfigs/schemas/datapoint'
const URI = process.env.MONGO_URI || 'mongodb://localhost:27017'

export const newConnection = mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology:true}, err => {
    if (err) throw err
    console.log(`connected to ${URI}...`)
})

export const queryCollection = async (schema, query) => {

    /*
    Helper function to create a query an entry a database for a specific or group of entries
    
    Parameters: 
    - (Schema): dictionary of the the data model
    - (Query): dictionary containing the fields and field queries

    */

    return await schema.find(query);
}

export const postCollection = async (schema, body) => {

    /*
    Helper function to create a new entry of a specified schema
    
    Parameters: 
    - (Schema): dictionary of the the data model
    - (Body): dictionary containing the actual data you're attempting to add

    */

   if(body.length == undefined) return await schema.create(body);
   if(body.length > 1) return await schema.insertMany(body);

}

export const editCollection = async (schema, query, delta) => {
    /*

    Helper function to help edit a queried document

    Parameters: 
    - (Schema): the data model
    - (Query): dictionary that requires the searchable key value pairs
    - (Body): dictionary contianing the actual data you're attempting to add

    */

   return await schema.find(query).updateMany({
        $set: {
            ...delta
        }
    });
}

export const deleteCollection = async (schema, query) => {
    /*

    Helper function to help delete a queried document

    Parameters: 
    - (Schema): the data model
    - (Query): dictionary that requires the searchable key value pairs

    */
	return await schema.find(query).remove();
};