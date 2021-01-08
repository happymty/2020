const express=require('express');

const router=express.Router();

const user=require('../sql/user');

// 进入注册首页
router.get('/',(req,res,next)=>{
    console.log('进入regist了');
    res.render('register')
})

// 注册按钮
router.post('/in',(req,res,next)=>{
    console.log('进入注册/in了');
    let obj=req.body;
    
    user.findOne({username:obj.username},(err,data)=>{
        if(err) return console.log(err);
        
        if(data){
            res.redirect('/register')
        }else{
            user.insertMany(obj,(err,data)=>{
                data;
                res.redirect('/login')
            })
        }
    })
    // res.render('register')
})



module.exports=router