
const express = require('express');
const csv = require('csv-express');
const router = express.Router();

let loggedIn=false;
const shares = ["YESBANK","TCS","WIPRO","RELIANCE","HDFCBANK","LT","TATASTEEL","BHARTIARTL","KOTAKBANK","MARUTI"];
let graphShow = false;
let requestSym=null;

router.get('/',(req,res,next)=>{
    graphShow=req.query.graphShow;    
    res.render('users/main-app',
    {pageTitle:'Main app',
    loggedIn:loggedIn,
    path:'/',
    shares:shares,
    graph:graphShow
});
});

router.post('/:shareSym',(req,res,next)=>{
    requestSym=req.params.shareSym; 
    console.log(requestSym);
    graphShow= true;
    res.render('users/main-app',
    {pageTitle:'Main app',
    loggedIn:loggedIn,
    path:'/',
    shares:shares,
    graph:graphShow,
    shareSym:requestSym
});
})

router.get('/about-us',(req,res,next)=>{
    res.render('users/about-us',
    {pageTitle:'About us',
    path:'/about-us',
    loggedIn:loggedIn});
});

router.get('/faqs',(req,res,next)=>{
    res.render('users/faqs',{pageTitle:'Frequently asked questions',path:'/faqs',loggedIn:loggedIn})
})

exports.routes = router;
exports.shareSym = requestSym;