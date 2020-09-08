import express from 'express';
const router = express.Router();
const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;

/**
 https://darrengwon.tistory.com/211
 **/
router.get("/kakao", passport.authenticate("kakao"));

router.get(
    "/kakao/callback",
    passport.authenticate("kakao", {failureRedirect: "/"}),
    (req, res) => {
        res.redirect("/");
    }
)