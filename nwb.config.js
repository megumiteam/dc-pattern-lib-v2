module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'DCPatternLib',
      externals: {
        react: 'React',
      },
    },
  },
  webpack: {
    extra: {
      entry: './src/index',
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
      module: {
        rules: [{ test: /\.tsx$/, loader: 'ts-loader' }],
      },
    },
  },
};
