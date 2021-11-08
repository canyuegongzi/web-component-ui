const fs = require('fs');
const path = require("path");

function writeFile(p,text){
    fs.writeFile(p, text,function (err) {
        if (!err)
            console.log("写入成功！")
    })
}

//递归创建目录 同步方法
function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

function _copy(src, dist) {
    const paths = fs.readdirSync(src);
    paths.forEach(function(p) {
        const _src = src + '/' + p;
        const _dist = dist + '/' + p;
        const stat = fs.statSync(_src);
        if(stat.isFile()) {// 判断是文件还是目录
            fs.writeFileSync(_dist, fs.readFileSync(_src));
        } else if(stat.isDirectory()) {
            copyDir(_src, _dist)// 当是目录是，递归复制
        }
    })
}

/*
 * 复制目录、子目录，及其中的文件
 * @param src {String} 要复制的目录
 * @param dist {String} 复制到目标目录
 */
function copyDir(src,dist){
    const b = fs.existsSync(dist);
    if(!b){
        mkdirsSync(dist);//创建目录
    }
    _copy(src,dist);
}

function createDocs(src,dist,callback){
    copyDir(src,dist);
    if(callback){
        callback();
    }
}

module.exports = {
    createDocs
}
