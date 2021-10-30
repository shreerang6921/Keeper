const express = require("express")
const router = express.Router();
const Note = require("../models/noteModel");

router.route("/create").post(async (req,res)=>{
    try{
    const title = req.body.title;
    const content = req.body.content;
    const newNote = new Note({
        title,
        content
    })
    await newNote.save();
    }catch(err){
        console.log(err)
    }
    
})

router.route("/notes").get(async (req,res)=>{
    try{
        const foundNotes = await Note.find()
       res.json(foundNotes)
       console.log(foundNotes)
    }catch(err){
        console.log(err)
    }

    

})

router.route("/delete/:id").delete(async (req,res)=>{
    try{
        const id = req.params.id;
        await Note.findByIdAndRemove(id).exec()
        res.send("item deleted")
    }catch(err){
        console.log(err)
    }

})
    


module.exports = router;