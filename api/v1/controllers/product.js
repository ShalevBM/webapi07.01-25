module.exports={
    getAll:(req,res)=>{
    try 
    {
          return res.status(200).json({Msg:`All Products. `});
    }
    catch
    {
          return res.status(500).json({Msg:"500 Server Error"});
    }
    },
    getById:(req,res)=>{
        try 
    {
        let prodid=req.params.id;
        return res.status(200).json({Msg:`You Get The Product: ${prodid}`});
    }
    catch
    {
          return res.status(500).json({Msg:"500 Server Error"});
    }
    },
    updateById:(req,res)=>{
        try 
    {
        console.log(req.body)
        let prodid=req.params.id;
        return res.status(200).json({Msg:`You Updated The Product: ${prodid}`});
    }
    catch
    {
          return res.status(500).json({Msg:"500 Server Error"});
    }
    },
    addNew:(req,res)=>{
        try 
    {
        console.log(req.body)
        return res.status(200).json({Msg:`You Added A New Product. `});
    }
    catch
    {
          return res.status(500).json({Msg:"500 Server Error"});
    }
    },
    deleteById:(req,res)=>{
        try 
    {
        let prodid=req.params.id;
        return res.status(200).json({Msg:`You Deleted The Product: ${prodid}`});
    }
    catch
    {
          return res.status(500).json({Msg:"500 Server Error"});
    }
    }
};