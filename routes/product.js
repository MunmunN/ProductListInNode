//include express
const express = require('express');
const product = require('../models/product');
const productModel=require('../models/product');



const router= express.Router();

router.get('/product',  async (req, res) => {
    console.log('Get Product API is called');

    const results = await product.find();

    try{
        res.json(results);
    }
    catch(err){
        res.send(err);
    }


    // res.json({
    //     sno:'123',
    //     name: 'Cookies',
    //     type: 'grocery',
    //     createDate: Date.now

    // });
});

router.post('/product', async (req, res) =>{
    console.log('Post product API  is called');

    //define product schema

    const product=new productModel({
        
        sno: req.body.sno,
        name: req.body.name,
        type: req.body.type,
        createDate: req.body.Date,
    
    });

    const save= await product.save();
    
    try{
    res.json(save);
    }
    catch(err){
        res.send(err);
    }

        
    });

module.exports =router;