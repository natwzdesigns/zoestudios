const fs = require('fs');

let data = fs.readFileSync('js/data.js', 'utf8').replace(/\r\n/g, '\n');

const postsStart = data.indexOf('const POSTS = [') + 'const POSTS = ['.length;
const postsEnd = data.indexOf('];\n\nconst TOOLS = ');

const postsContent = data.substring(postsStart, postsEnd);

// Split by '  {\n    id: '
let segments = postsContent.split('  {\n    id: ');
segments.shift(); 

let posts = segments.map(s => {
  let idMatch = s.match(/^([0-9]+),/);
  let id = idMatch ? parseInt(idMatch[1]) : 0;
  return { id, text: '  {\n    id: ' + s };
});

const desiredOrder = [1, 7, 5, 99, 10, 2, 3, 4, 6];

// Sort posts based on desiredOrder
posts.sort((a, b) => {
  let aIdx = desiredOrder.indexOf(a.id);
  let bIdx = desiredOrder.indexOf(b.id);
  if (aIdx === -1) aIdx = 999;
  if (bIdx === -1) bIdx = 999;
  return aIdx - bIdx;
});

let newPostsContent = '\n' + posts.map((p, i) => {
  let t = p.text;
  if (t.endsWith(',\n')) t = t.slice(0, -2) + '\n';
  
  if (i < posts.length - 1) {
    if (!t.endsWith('  },\n')) t = t.replace(/  }\n$/, '  },\n');
  } else {
    if (t.endsWith('  },\n')) t = t.replace(/  },\n$/, '  }\n');
  }
  return t;
}).join('');

const newData = data.substring(0, postsStart) + newPostsContent + data.substring(postsEnd);
fs.writeFileSync('js/data.js', newData);
console.log('Posts reordered successfully! Total posts: ' + posts.length);
