import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import pkg from './package.json';

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

const production = !process.env.ROLLUP_WATCH;

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
	{
		input: 'src/web-components/index.js',
		output: [
			{ file: pkg.module, 'format': 'es' },
			{ file: pkg.main, 'format': 'umd', name }
		],
		plugins: [
			svelte({ compilerOptions:{customElement: true}, emitCss: false, include: /\.wc\.svelte$/ }),
			svelte({ compilerOptions: {customElement: false}, emitCss: false, exclude: /\.wc\.svelte$/ }),
			resolve()
		]
	}, {
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