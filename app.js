// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores importnant info abour project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything defualt)



const _ = require('lodash');

const item = [1, [2, [3, [4]]]];
const newItem = _.flattenDeep(item);
console.log(newItem);