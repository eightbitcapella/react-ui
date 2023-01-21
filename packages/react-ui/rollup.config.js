const typescript = require("@rollup/plugin-typescript")
const commonjs = require("@rollup/plugin-commonjs")
const resolve = require("@rollup/plugin-node-resolve")
const external = require("rollup-plugin-peer-deps-external")
const terser = require("@rollup/plugin-terser")
const dts = require("rollup-plugin-dts")
const { visualizer } = require("rollup-plugin-visualizer")
const alias = require("@rollup/plugin-alias")
const path = require("path")

const pkg = require("./package.json")

module.exports = [
  {
    input: "./src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
        name: "react-ui",
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      external({
        packageJsonPath: path.resolve("./packages/react-ui", "./package.json"),
      }),
      resolve(),
      commonjs(),
      alias({
        find: "react",
        replacement: "./node_modules/react",
      }),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      visualizer(),
      terser(),
    ],
    external: ["react", "react-dom", "react-is", "styled-components"],
  },
  {
    input: "dist/types/index.d.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "esm",
      },
    ],
    plugins: [
      dts.default({
        tsconfig: "./tsconfig.json",
      }),
    ],
  },
]
