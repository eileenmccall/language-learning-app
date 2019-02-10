const express = require("express");
const path = require("path");
const multer = require("multer");

const router = express.Router();

const MIME_TYPE_MAP = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValidMimeType = MIME_TYPE_MAP[file.mimetype];
        error = isValidMimeType ? null : new Error('Invalid mime type');
        cb(error, "./public/images");
    },
    filename: (req, file, callback) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE_MAP[file.mimetype];
        callback(null, name + '-' + Date.now() + '.' + extension);
    }
});

router.post("", multer({ storage: storage }).single("image"), (req, res, rext) => {
    const url = req.protocol + '://' +req.get('host');
    res.json(url + '/images/' + req.file.filename);
});

module.exports = router;