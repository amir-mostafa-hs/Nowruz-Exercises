/* 
    1- npm i purify-css -D (install PurifyCSS)
    2- touch purify.js (create a file)
    3- Write these codes in the created file :
            const purify = require("purify-css")
            const htmlFiles = ['*.html'];
            const cssFiles = ['*.css'];
            const opts = {
                output: 'purified.css'
            };
            purify(htmlFiles, cssFiles, opts, function (res) {
                log(res);
            });
    4- run code (node purify.js)
*/

const purify = require("purify-css");
const htmlFiles = ["./*.html"];
const cssFiles = ["./CSS/*.css"];
const opts = {
  output: "./CSS/purified.css",
};
purify(htmlFiles, cssFiles, opts, function (res) {
  log(res);
});
