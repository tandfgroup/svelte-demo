import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import * as fs from 'fs';
const pkg = require('./package.json');
const BUILD_DIR = "public/build"
const production = !process.env.ROLLUP_WATCH;
fs.rmSync(`${BUILD_DIR}`, { recursive: true, force: true });
function generateComponentConfig() {
	const dir = fs.readdirSync("./src/web-components");
	return dir.filter(item => item !== "index.js").map(folderName => {
		return {
			external : Object.keys(pkg.dependencies),
			input: [`src/web-components/${folderName}/index.js`],
			output: [
				{ file: `${BUILD_DIR}/wc/${folderName}.mjs`, 'format': 'es' },
				{ file: `${BUILD_DIR}/wc/${folderName}.js`, 'format': 'umd', name: folderName }
			],
			plugins: [
				svelte({ compilerOptions:{customElement: true}, include: /\.wc\.svelte$/ }),
				svelte({ compilerOptions: {customElement: false}, exclude: /\.wc\.svelte$/ }),
				resolve(),
				commonjs(),
				production && terser()
			],
		};
	});
}

function generateComponentBundleConfig() {
	fs.rmSync(`${BUILD_DIR}/wcBundle`, { recursive: true, force: true });
	return [{
		external : Object.keys(pkg.dependencies),
		input: "src/web-components/index.js",
		output: {
			sourcemap: true,
			format: 'iife',
			name: 'wcBundle',
			file: `${BUILD_DIR}/wcBundle.js`,
		},
		plugins: [
			svelte({ compilerOptions:{customElement: true}, include: /\.wc\.svelte$/ }),
			svelte({ compilerOptions: {customElement: false}, exclude: /\.wc\.svelte$/ }),
			resolve(),
			commonjs(),
			production && terser()
		],
	}];
}

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true,
      });

      process.on('SIGTERM', toExit);
      process.on('exit', toExit);
    },
  };
}

function plugins(customElement = false){
	return [
		svelte({
			compilerOptions: {
				dev: !production,
				customElement,
			},
		}),
		css({ output: 'bundle.css' }),
		resolve({
			browser: true,
			dedupe: ['svelte'],
		}),
		commonjs(),
		!production && serve(),
		!production && livereload('public'),
		production && terser(),
	];
}

export default [
	...generateComponentConfig(),
	...generateComponentBundleConfig(), 
	{
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: plugins(),
  watch: {
    clearScreen: false,
  },
}];