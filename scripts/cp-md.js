const shell = require('shelljs');
const chalk = require('chalk');
shell.cp('./README.md', './packages/any-touch/')
console.log(chalk.green('复制MD文档到packages/any-touch成功!'));