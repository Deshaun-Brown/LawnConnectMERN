import {ObjectId} from "mongogdb";

const validId = (paramName) => {
    return (req,res,next) => {
        try{
        req[paraName] = new ObjectId(req.params[paramName]);
        return next();
        } catch (err){
            return res.status(400).json({error: `${paramName} is not a valid ObjectId`})
        }
    }
}