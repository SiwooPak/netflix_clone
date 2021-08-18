const express = require('express');
const router = express.Router();
const { Favorite } = require("../models/Favorite");

//=================================
//             Favorite
//=================================

router.post("/favoriteNo", (req, res) => {
    const {movieId} = req.body;

    Favorite.find({movieId})
    .exec((err, info) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({success:true, favoriteNo:info.length})
    })
});

router.post("/register", (req, res) => {

    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});


module.exports = router;
