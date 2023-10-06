const router=require("express").Router()
const {getArticls,getArticl , addArticl , deleteArticl , updateArticl}=require("../Controller/articlController")

router.get('/',getArticls)

router.get('/:id',getArticl)

router.post('/add',addArticl)

router.delete('/delete/:id',deleteArticl)

router.put('/update/:id',updateArticl)



module.exports=router;