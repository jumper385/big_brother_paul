export function post(req,res){
    // return the location and timestamp of the datapoint sent
    var {location,moduleID,timestamp} = req.body;
    res.json({
        message: `You sent a datapoint from ${location} at ${timestamp}`
    });
};

export function put(req,res){
    // return the type of request and timestamp
    res.json({
        message: `This is a PUT request`,
        timestamp: new Date()
    });
};

export function del(req,res){
    // return the type of request and timestamp
        res.json({
        message: `This is a DELETE request`,
        timestamp: new Date()
    });
};

export function get(req,res){
    // return the type of request and timestamp
        res.json({
        message: `This is a GET request`,
        timestamp: new Date()
    });
};