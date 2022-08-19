const Handler = (err, req, res, next)=> {
    const sc = err.statusCode || 500
    const msg = err.message || "Something went wrong"
    var stack = ""
    if(ProcessingInstruction.env.NODE_ENV == "development"){
        stack = err.stack
    }
    res.status(sc).json({
        success: false,
        message: msg,
        stack: stack
    })
}