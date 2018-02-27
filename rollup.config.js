import babel from 'rollup-plugin-babel';

export default {
  plugins: [
    babel({
      // NOTE: loose mode is requird for valid work
      presets: [['@babel/preset-env', {
        loose: true,
        modules: false
      }]],
      babelrc: false
    }),
  ],
  output: {
    exports: 'named'
  }
};