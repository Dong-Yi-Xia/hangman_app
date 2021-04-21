# Hangman App
https://dong-yi-xia.github.io/hangman_app/

## Resources 
SVG Drawing<br>
https://www.w3schools.com/graphics/svg_circle.asp<br>

Math.random()<br>
https://www.w3schools.com/js/js_random.asp<br>

React comment out shortcut<br>
{/* Using shift + alt + a */}<br>

Random Word API<br>
https://random-word-api.herokuapp.com/word<br>


### Deploy on GitHub Page with React
npm install gh-pages / npm add gh-pages<br>

In package.json<br>
"homepage": "https://username.github.io/repoName",<br>

Inside the script tag add<br>
"predeploy": "npm run build", or "predeploy": "yarn build",<br>
"deploy": "gh-pages -d build"<br>

In the terminal<br>
npm run deploy / yarn deploy<br>
Git add. Git commit. Git push<br>

In github pages. Select gh-pages branch.<br>