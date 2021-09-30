const typescript = require('@rollup/plugin-typescript');
const json = require('@rollup/plugin-json');
const replace = require('@rollup/plugin-replace');
import {version} from './packages/web-ui/package.json';

export default {
    input: './packages/web-ui/src/index.ts',

    plugins: [
        typescript({
            exclude: 'node_modules/**',
            typescript: require('typescript'),
        }),
        json(),
        replace({
            __VERSION__: version
        })
    ],

    output: [{
        format: 'umd',
        name: 'webComponentUI',
        file: `./packages/web-ui/dist/web-ui.umd.js`,
        sourcemap: false,
    }]
};
