const path  = require("path");
const fse = require('fs-extra')

const fromPath = path.resolve(__dirname, '../src/');
const toPath = path.resolve(__dirname, '../lib/');
try {
    fse.copySync(fromPath, toPath);
    console.log('构建完成');
}catch (e) {
    console.log(e);
}

