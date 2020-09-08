const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;

import {Strategy as KakaoStrategy} from "passport-kakao";
import {User} from "../models";

passport.use(
    new KakaoStrategy(
        {
           
}))