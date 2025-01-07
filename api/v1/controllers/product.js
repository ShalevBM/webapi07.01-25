module.exports={
    getAll:(req,res)=>{
        return res.status(200).json({Msg:`All Products. `});
    },
    getById:(req,res)=>{
        let prodid=req.params.id;
        return res.status(200).json({Msg:`You Get The Product: ${prodid}`});
    },
    updateById:(req,res)=>{
        console.log(req.body)
        let prodid=req.params.id;
        return res.status(200).json({Msg:`You Updated The Product: ${prodid}`});
    },
    addNew:(req,res)=>{
        console.log(req.body)
        return res.status(200).json({Msg:`You Added A New Product. `});
    },
    deleteById:(req,res)=>{
        let prodid=req.params.id;
        return res.status(200).json({Msg:`You Deleted The Product: ${prodid}`});
    }
};