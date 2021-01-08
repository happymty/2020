const express=require('express');

const router=express.Router();

const user=require('../sql/user');

// 进入登陆首页
router.get('/',(req,res,next)=>{
    console.log('进入login了');
    res.render('login')
})

// 登陆按钮
router.post('/in',(req,res,next)=>{
    console.log('进入登陆/in了');
    let obj=req.body;
    
    user.findOne({username:obj.username},(err,data)=>{
        if(err) return console.log(err);
        console.log(data);
        if(data){
            console.log('登陆成功');
            // res.cookie('isLogin','ok');
            req.session.isLogin='ok';
            res.redirect('/')

        }else{   
            res.redirect('/register')
            
        }
    })
    
})



module.exports=router