module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'DCPatternLib',
      externals: {
        react: 'React'
      }
    }
  }
}
