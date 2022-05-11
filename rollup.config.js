import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import * as fs from 'fs';
const pkg = require('./package.json');

const production = !process.env.ROLLUP_WATCH;

function generateComponentConfig() {
	fs.rmSync("public/build/wc", { recursive: true, force: true });
	const dir = fs.readdirSync("./src/web-components");
	return dir.map(folderName => {
		return {
			external : Object.keys(pkg.dependencies),
			input: [`src/web-components/${folderName}/index.js`],
			output: [
				{ file: `public/build/wc/${folderName}.mjs`, 'format': 'es' },
				{ file: `public/build/wc/${folderName}.js`, 'format': 'umd', name: folderName }
			],
			plugins: [
				svelte({ compilerOptions:{customElement: true}, emitCss: false, include: /\.wc\.svelte$/ }),
				svelte({ compilerOptions: {customElement: false}, emitCss: false, exclude: /\.wc\.svelte$/ }),
				resolve(),
				commonjs(),
				production && terser()
			],
		};
	});
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
	...generateComponentConfig(), {
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