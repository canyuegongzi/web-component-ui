import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import scss from 'rollup-plugin-scss'
import commonjs from '@rollup/plugin-commonjs';
import { readdirSync } from "fs";
import { resolve } from "path";
const input = resolve(__dirname, "../src/packages");
const output = resolve(__dirname, "../lib");
const config = readdirSync(input)
  .filter(name => !["theme", "index.tsx", "types.ts"].includes(name))
  .map(name => ({
    input: `${input}/${name}/index.tsx`,
    external: ["@canyuegongzi/web-core"],
    plugins: [
      scss({
          output: true,
      }),
      nodeResolve(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            experimentalDecorators: true,
            declaration: false,
            target: "esnext",
          },
          include: [`src/packages/${name}/*`],
          exclude: ["node_modules", "examples", "mobile", "tests"]
        },
        abortOnError: false,
        clean: true
      }),
      commonjs({

      }),
    ],
    output: {
      name: "index",
      file: `${output}/${name}/index.js`,
      format: "es"
    }
  }));
config.push({
  input: `${input}/index.tsx`,
  external: ["@canyuegongzi/web-core"],
  plugins: [
    scss({ output: false }),
    nodeResolve(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          experimentalDecorators: true,
          declaration: false
        },
        include: [`src/packages/**/*`],
        exclude: ["node_modules", "examples", "mobile", "tests"]
      },
      abortOnError: false,
      clean: true
    }),
    commonjs(),
  ],
  output: {
    name: "index",
    file: `${output}/index.js`,
    format: "es"
  }
});
export default config;
