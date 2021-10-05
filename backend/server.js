const express = require('express');
const multer = require('multer');
const cors = require('cors')
require('dotenv').config();

const app = express();
const port = process.env.PORT;
app.use(cors())
const fileStorageEngine = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './images');
    },
    filename : (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({storage : fileStorageEngine});

app.post('/single',upload.single('image'), (req, res) => {
    console.log(req.file);
    res.send('single file upload successfully');
})

app.post('/multiple', upload.array('images', 3), (req, res) => {
    console.log(req.files);
    res.send('Multiple files uploaded');
})

app.listen(port, () => {
    console.log(`connected to ${port} successfully`)
})