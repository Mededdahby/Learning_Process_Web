const router=require("express").Router()
const { getUsers , getOneUser , addUser , editUser, delateUser} = require('../Controller/UsersController')

router.get('/' , getUsers);
router.get('/:id' , getOneUser);
router.post('/add' , addUser);
router.put('/edit/:id', editUser)
router.delete('/delete/:id', delateUser)


module.exports = router;


