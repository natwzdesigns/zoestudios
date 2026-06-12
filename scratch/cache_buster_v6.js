const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/js\/app\.js\?v=\d+/, 'js/app.js?v=6');
html = html.replace(/css\/style\.css\?v=\d+/, 'css/style.css?v=6');
fs.writeFileSync('index.html', html);

let dataHtml = fs.readFileSync('index.html', 'utf8');
dataHtml = dataHtml.replace(/js\/data\.js\?v=\d+/, 'js/data.js?v=6');
fs.writeFileSync('index.html', dataHtml);

console.log('Updated cache buster to v6');
