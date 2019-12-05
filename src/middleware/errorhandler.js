module.exports = (err,req,res,next)=>{
    if (err.name==='ValidationError'){
        return res.status(400).json.err()
    }
    console.error(err);
    return res.status(500).json('something unexpected happened');
}
