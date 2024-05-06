const multer =require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = file.originalname
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
 module.exports = multer({ storage })