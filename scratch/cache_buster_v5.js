const fs = require('fs');
const files = ['twitter-login.html', 'tools.html', 'post.html', 'index.html', 'gl-keymap.html', 'faq.html', 'disable-vbs.html', 'bgmi-setup.html', '404.html'];
files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/src="js\/(.*?\.js)(\?v=\d+)?"/g, 'src="js/$1?v=5"');
  content = content.replace(/href="css\/(.*?\.css)(\?v=\d+)?"/g, 'href="css/$1?v=5"');
  fs.writeFileSync(f, content);
});
console.log('Updated cache buster to v5');
