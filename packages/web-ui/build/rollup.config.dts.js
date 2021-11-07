import nodeResolve from "@rollup/plugin-node-resolve"; // 告诉 Rollup 如何查找外部模块
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import scss from 'rollup-plugin-scss'
import { resolve } from "path";
const input = resolve(__dirname, "../src/packages");
const output = resolve(__dirname, "../lib");
const config = [
  {
    input: `${input}/index.tsx`,
    output: {
      format: "es",
      file: `${output}/index.esm.js`
    },
    plugins: [
      scss({
         output: false,
      }),
      terser(),
      nodeResolve(),
      typescript({
            useTsconfigDeclarationDir: false,
            tsconfigOverride: {
                include: ["src/packages/**/*"],
                exclude: ["node_modules", "examples", "mobile", "tests"]
            },
            abortOnError: false
      })
    ],
    external: ["@canyuegongzi/web-core"]
  }
];
export default config;
