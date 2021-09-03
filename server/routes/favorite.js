const express = require("express");
const router = express.Router();
const { Favorite } = require("../models/Favorite");

//=================================
//             Favorite
//=================================

router.post("/favoriteNo", (req, res) => {
  const { movieId } = req.body;

  Favorite.find({ movieId }).exec((err, info) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, favoriteNo: info.length });
  });
});

router.post("/favorited", (req, res) => {
  const { movieId, userFrom } = req.body;
  Favorite.find({ movieId, userFrom }).exec((err, info) => {
    if (err) return res.status(400).send(err);
    // 즐겨찾기 했으면 true, 아니면 false
    let isFavorited = false;
    // 즐겨찾기 정보가 있다면 true로 재할당
    if(info.length) isFavorited = true;
    // 즐겨찾기 정보를 보냄.
    res.status(400).json({ success: true, isFavorited });
  });
});

router.post("/addToFavorite", (req, res) => {
  const favorite = Favorite(req.body)
  
  favorite.save((err, doc) => {
    if(err) return res.status(400).send(err);
    return res.send(201).json({success: true})
  })
});

router.post("/removeFromFavorite", (req, res) => {
  const {movieId, userFrom} = req.body;
  Favorite.findOneAndDelete({movieId, userFrom})
    .exec((err,doc) => {
      if(err) return res.status(400).send(err);
      return res.status(200).json({ success: true, doc});
    })
});

router.post("/getFavoritedMovie", (req, res) => {
  const userFrom = req.body.userFrom;
  Favorite.findAll({userFrom})
    .exec((err,results) => {
      if(err) return res.status(400).send(err);
      return res.status(200).json({ success: true, results});
    })
});

module.exports = router;
