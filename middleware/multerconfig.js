const multer = require('multer')


const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'./storage') // cb(err,success)
    }, 
    filename : function(req,file,cb){
        cb(null,Date.now()+"-" + file.originalname)
    }
})


// dsldks

module.exports = {multer,storage} 