const  express  = require("express");
var validate=require('../validate/user.validate')
var controller=require('../controllers/user.controller')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var router=express.Router();

router.get('/', controller.index)
router.get('/search',controller.search)
  
  // Create
router.get('/create', controller.create)

router.get('/:id',controller.getid)
  
router.post('/create',
  upload.single('avatar'),
  validate.postCreate,
  controller.postCreate
)

module.exports=router