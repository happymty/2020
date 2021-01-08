
const db = require('./db.js') 

const staffSchema = new db.mongoose.Schema({
    "username":{type:String},
    "sex":{type:String},
    "age":{type:Number},
    "salary":{type:Number},
    "year":{type:Number},
    
})



module.exports = db.mongoose.model("staff",staffSchema)