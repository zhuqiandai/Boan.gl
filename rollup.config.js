const typescript = require('@rollup/plugin-typescript')

module.exports = {
    input: 'src/main.ts',
    output: {
        dir: 'dist',
        format: 'cjs',
    },
    plugins: [
        typescript({
            exclude: 'node_modules/**',
            compilerOptions: {
                lib: ['es5', 'es6', 'dom', 'esnext'],
                target: 'esnext',
            },
        }),
    ],
}
