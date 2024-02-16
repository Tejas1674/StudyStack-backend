const Cpp = require('../model/Cpp.js')

module.exports.getcpp= async(req,res)=>{
    const  cpp = await Cpp.find();
    res.send(cpp);
}
