const fs = require('fs');
const path = require('path');
const fse = require('fs-extra')
const {createDocs} = require("./utils");
const output = path.resolve(__dirname, "../lib");
const srcDir = path.resolve(__dirname, "../");
try {
    fs.exists(`${output}/packages`, (data) => {
        if (data) {
            fse.copySync(`${output}/packages`, `${srcDir}/types`);
            fse.copySync(`${output}/utils`, `${srcDir}/types/utils`);
            const types = path.resolve(__dirname, "../types");
            fse.removeSync(`${output}/packages`);
            fse.removeSync(`${output}/utils`);
            fs.readdirSync(types)
                .filter(name => !["theme", "index.d.ts", "types.ts"].includes(name))
                .forEach((name) => {
                    fs.exists(`${types}/${name}/index.d.ts`, (data) => {
                        if (data) {
                            const js = fs.readFileSync(`${types}/${name}/index.d.ts`, 'utf-8')
                            fs.writeFileSync(`${types}/${name}/index.d.ts`,
                                js.replace(`import * as css from './index.scss';`, 'export const css: any;')
                            )
                        }
                    })
                })
        }
    })
} catch (e) {
    console.log(e);
}
