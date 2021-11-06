const fs = require('fs');
const path = require('path');
const output = path.resolve(__dirname, "../lib");


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
    })
