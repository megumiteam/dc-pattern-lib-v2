module.exports = {
  type: 'react-component',
  npm: {
    cjs: false,
    esModules: false,
    umd: {
      global: 'DCPatternLib',
      externals: {
        react: 'React',
      },
    },
  },
  webpack: {
    config(conf) {
      conf.entry = './src/index',
      conf.resolve = {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      }
      conf.module.rules.push({
        exclude: '/example/',
        test: /\.tsx$/, loader: 'ts-loader' })
      return conf
    }
  },
};
