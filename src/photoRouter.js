const express = require("express");
const path = require("path");
const logger = require("../logger");
const xss = require("xss");

const PhotoService = require("./photo-service");

const photoRouter = express.Router();
const jsonBodyParser = express.json();

photoRouter.post("/", jsonBodyParser, ({}, res, next) => {

	PhotoService.getToken()


})


photoRouter.get(jsonBodyParser, (req, res, next) => {

    // PhotoService.getUserNicknameAndMaps(req.app.get("db"), user)
    //     .then((arr) => {
    //         let nickname = arr[0][0].nickname;
    //         let maps = arr[1];
    //         res.json({ nickname, maps });
    //     })
    //     .catch(next);
});