import links from "../models/Link.js";
import mongoose from "mongoose";


class linkController{

    static listarLinks = (req,res) =>{
        links.find((err,links)=>{
            res.status(200).json(links)
        })
    }

    static redirecionarLinksId = (req,res) =>{
      let  idLink = req.params.id;

       links.findById(idLink,(err,links)=>{

        if(err) {
            res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
        }else{
            res.status(300).redirect(links.link);
           
        }
       });
       
        
        
       
    }

    static cadastrarLink=(req,res) =>{

        let link = new links(req.body);

        link.save((err) =>{

            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar link`})
            }else{
                res.status(200).send("sucesso")
            }
        })
    }

    static modificarLink = (req,res)=>{

        let  idLink = req.params.id;
        links.findByIdAndUpdate(idLink,{$set: req.body},(err)=>{
        if(err){
            res.status(500).send({message: `${err.message} - Falha ao modificar link`})
        }else{
            res.status(200).send("sucesso")
        }
    })
    }
    static excluirLink = (req,res)=>{

        let  idLink = req.params.id;
        links.findByIdAndDelete(idLink,{$set: req.body},(err)=>{
        if(err){
            res.status(500).send({message: `${err.message} - Falha ao excluir link`})
        }else{
            res.status(200).send("sucesso")
        }
    })
    }

}
export default linkController