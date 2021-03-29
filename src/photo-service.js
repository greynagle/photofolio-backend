const fetch = require("node-fetch");
const config = require("./config");

const body = `client_secret=${config.CLIENT_SECRET}&grant_type=refresh_token&refresh_token=${config.REFRESH}&client_id=${config.CLIENT_ID}`

const url = "https://www.googleapis.com/oauth2/v3/token"

console.log(config)


fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
        "Content-length": 268,
        "content-type": "application/x-www-form-urlencoded",
    },
})
    .then((res) => res.json()) // expecting a json response
    .then((json) => console.log(json));
