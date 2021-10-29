const express = require("express")
const router = express.Router();
const Note = require("../models/noteModel");

router.route("/create").post((req,res)=>{
    const title = req.body.title;
    const content = req.body.content;
    const newNote = new Note({
        title,
        content
    })
    newNote.save();
})

router.route("/notes").get((req,res)=>{
    Note.find()
        .then(foundNotes=> res.json(foundNotes))

})

router.route("/delete/:id").delete(async (req,res)=>{
    const id = req.params.id;
    await Note.findByIdAndRemove(id).exec()
    res.send("item deleted")

})
    


module.exports = router;