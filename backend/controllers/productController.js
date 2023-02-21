let Product=require('../models/productModel')
exports.getAllProducts = async (req,res)=>{
    try{
        const {page=1,limit=5}=req.query

        const produits= await Product.find()
        .limit(limit)
        .skip((page - 1)*limit)
        .sort({_id:'desc'})
        .exec()
        const count = await Product.countDocuments()
        res.status(200).json({ 
        success:true,
        totalPages:Math.ceil(count/limit),
        
        produits
     })
     }catch(err){
        res.status(400).json({
            error:err.message
        })
     }
}

//------------------ajout-------------------------------------

exports.addProduct= async (req,res)=>{
    try{
    const produit= new Product(req.body)
    await produit.save()
    res.status(200).json({
        success:true,
        produit
    })
}catch(err){
    res.status(400).json({
        error:err.message
    })
 }
}

exports.getProductById = async (req,res)=>{
    try{
    const produit= await Product.findOne({
        _id:req.params.idproduct
    })
    res.status(200).json({
        success:true,
        produit
    })
}catch(err){
    res.status(400).json({
        error:err.message
    })
 }
}

//------------------------------update---------------
exports.updateProduct = async (req,res)=>{
    try{
    const update_prod= await Product.updateOne( 
        {_id:req.params.idproduct},
        {
            $set:req.body
        }
    )
    res.status(200).json({
        success:true,
        update_prod
    })}catch(err){
        res.status(400).json({
            error:err.message
        })
     }
}


//-----------------suppresion------------------------
exports.deleteProduct = async(req,res)=>{
    try{
    const del_prod= await Product.deleteOne(
        {_id:req.params.idproduit}
    )
    res.status(200).json({
        deleted:true,
        del_prod
    })
}catch(err){
    res.status(400).json({
        error:err.message
    })
 }
}