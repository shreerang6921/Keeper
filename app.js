const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://shreekale:shreemongo6921@cluster0.wvxez.mongodb.net/notesDB?retryWrites=true&w=majority")

app.use("/",require("./routes/noteRoute"))
const PORT = process.env.PORT || 8080;

if ( process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT, console.log(`Server started on port ${PORT}`));
