const path  = require("path");
const fse = require('fs-extra')
const spawn = require('cross-spawn');
function getNewVersion(version) {
    const versionItems = version.split(".").map(item => Number(item));
    versionItems[versionItems.length -1] = versionItems[versionItems.length -1] + 1;
    return versionItems.join(".");
}
let newVersion = '';
if (fse.pathExistsSync(path.resolve(__dirname, '../npm-version/package.json'))) {
    const packageObj = fse.readJsonSync(path.resolve(__dirname, '../npm-version/package.json'));
    newVersion = getNewVersion(packageObj.version);
}

console.log("开始构建总包");

/********************构建sdk***********************************/
// 执行脚本构建
// process.execSync('npm run build-sdk');
spawn.sync('npm run build-sdk', [], { stdio: 'inherit' });
// 复制构建后的包
const fromPath1 = path.resolve(__dirname, '../lib/');
const toPath1 = path.resolve(__dirname, '../npm-version/dist/sdk');
fse.copySync(fromPath1, toPath1);
console.log('sdk构建完成');

/********************构建server***********************************/

spawn.sync('npm run build-server', [], { stdio: 'inherit' });
const fromPath2 = path.resolve(__dirname, '../server-war/');
const toPath2 = path.resolve(__dirname, '../npm-version/dist/server');
fse.copySync(fromPath2, toPath2);
console.log('服务端构建完成');

/**************************生成新npm包**************************/

const fileNameList = ["package.json", "README.md", ".npmignore", ".npmrc"];
for (let i = 0; i < fileNameList.length; i ++) {
    const fromPath = path.resolve(__dirname, '..', fileNameList[i]);
    const toPath = path.resolve(__dirname, '../npm-version/', fileNameList[i]);
    fse.copySync(fromPath, toPath);
}
const packageObj = fse.readJsonSync(path.resolve(__dirname, '..', "package.json"));
packageObj.main = "./dist/sdk/index.js";
packageObj.files = [
    "dist",
    "LICENSE",
    "package.json",
    "README.md"
];
packageObj.version = newVersion || getNewVersion(packageObj.version);
fse.writeJsonSync(path.resolve(__dirname, '../npm-version/', "package.json"), packageObj, { spaces: 2 });


console.log("总包构建完成");

