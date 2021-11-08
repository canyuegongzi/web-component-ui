const fs = require('fs');
const path = require('path');
const {createDocs} = require("./utils");
const output = path.resolve(__dirname, "../lib");
const input = path.resolve(__dirname, "../src/packages");


fs.readdirSync(output)
    .filter(name => !["theme", "index.js", "types.ts"].includes(name))
    .forEach((name) => {
        fs.exists(`${output}/${name}/index.css`, (data) => {
            if (data) {
                const css = fs.readFileSync(`${output}/${name}/index.css`)
                const js = fs.readFileSync(`${output}/${name}/index.js`, 'utf-8')
                fs.writeFileSync(`${output}/${name}/index.js`,
                    js.replace(`var css = /*#__PURE__*/Object.freeze({
    __proto__: null
});`, `
var css = \`${css}\`
`)
                )
            }
        })
        try {
            fs.exists(`${input}/${name}/fonts`, (data) => {
                if (data) {
                    createDocs(`${input}/${name}/fonts`, `${output}/${name}/fonts`)
                }
            })
        } catch (e) {
            console.log(e);
        }
    })
try {
    fs.exists(`${input}/theme/fonts`, (data) => {
        if (data) {
            createDocs(`${input}/theme/fonts`, `${output}/fonts`)
        }
    })
} catch (e) {
    console.log(e);
}
