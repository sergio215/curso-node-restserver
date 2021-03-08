const{response,request}=require('express');

const usuariosGet=(req=request,res=response)=>{

    const {q,nombre="no name",key}=req.query;
    res.json({
        msg:'get API - controlador',q,nombre,key
    });
}


const usuariosDelete=(req,res=response)=>{

    res.json({
        msg:'Delete API - controlador'
    });
}


const usuariosPut=(req,res=response)=>{

const {id}=req.params;

    res.json({
        msg:'Put API - controlador',id
    });
}


const usuariosPatch=(req,res=response)=>{

    res.json({
        msg:'Patch API - controlador'
    });
}

const usuariosPost=(req,res=response)=>{
const {nombre,edad}=req.body;
    res.json({
        msg:'Post API - controlador',nombre,edad
    });
}




module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPatch,
    usuariosDelete,
    usuariosPut

}