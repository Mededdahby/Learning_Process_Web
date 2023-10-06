const express = require("express")
const router=  express.Router();
router.use(express.json())

const {getUser , getUsers, addUser, deleteUser , updateUser} = require("../Controller/userController");




router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/add/', addUser);

router.delete('/delete/:id', deleteUser);

router.put('/update/:id', updateUser);




module.exports=router
