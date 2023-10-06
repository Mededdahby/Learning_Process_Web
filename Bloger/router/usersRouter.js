const router=require("express").Router()
const { getUsers , getOneUser , addUser , editUser, delateUser, addtUserGet} = require('../controller/UsersController')

router.get('/' , getUsers);
router.get('/edit/:id' , getOneUser);
router.get('/add' , addtUserGet);
router.post('/add' , addUser);
// router.post('/edit/:id', editUser)
router.post('/delete/:id', delateUser)


module.exports = router;


