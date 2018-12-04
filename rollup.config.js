export default {
    input : 'src/index.js',
    plugins : [
        require('rollup-plugin-node-resolve')({
            ignoreGlobal : true
        }),
        require('rollup-plugin-commonjs')({
            browser : true
        }),
        require('rollup-plugin-node-globals')(),
        require('rollup-plugin-node-builtins')(),
        require('rollup-plugin-buble')()
    ],
    output : {
        file : 'gen/bundle.js',
        format : 'cjs'
    }
};
