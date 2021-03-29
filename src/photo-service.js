const fetch = require("node-fetch");
const config = require("./config");

// const body = `client_secret=${config.CLIENT_SECRET}&grant_type=refresh_token&refresh_token=${config.REFRESH}&client_id=${config.CLIENT_ID}`

const url = "https://www.googleapis.com/oauth2/v3/token";

// console.log(config)

// fetch(url, {
//     method: "POST",
//     body: JSON.stringify(body),
//     headers: {
//         "Content-length": 268,
//         "content-type": "application/x-www-form-urlencoded",
//     },
// })
//     .then((res) => res.json()) // expecting a json response
//     .then((json) => console.log(json));

function get_access_token_using_saved_refresh_token() {
    // from the oauth playground
    const refresh_token = config.REFRESH;
    // from the API console
    const client_id = config.CLIENT_ID;
    // from the API console
    const client_secret = config.CLIENT_SECRET;
    // from https://developers.google.com/identity/protocols/OAuth2WebServer#offline
    const refresh_url = url;

    const post_body = `grant_type=refresh_token&client_id=${encodeURIComponent(
        client_id
    )}&client_secret=${encodeURIComponent(
        client_secret
    )}&refresh_token=${encodeURIComponent(refresh_token)}`;

    let refresh_request = {
        body: post_body,
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded",
        }),
    };

    // post to the refresh endpoint, parse the json response and use the access token to call files.list
    fetch(refresh_url, refresh_request)
        .then((response) => {
            return response.json();
        })
        .then((res) => res.json())
        .then((json) => console.log(json));
}
