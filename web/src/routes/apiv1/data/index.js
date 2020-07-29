export function post(req,res){
    // return the request body
    var {location,moduleID,timestamp} = req.body;
    res.json({
        message: `You sent a datapoint from ${location} at ${timestamp}`
    });
};