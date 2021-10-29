const dotenv = require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();

app.use(cors());
app.use(express.json());

const DB = process.env.DATABASE
mongoose.connect(DB)

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
