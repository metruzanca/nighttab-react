const { override, addBabelPlugins } = require('customize-cra')


if(process.env.NODE_ENV === 'development') {
  module.exports = override(
    addBabelPlugins([
      // Adds the names styled-components to the generated classnames
      // Useful for development
      "babel-plugin-styled-components",
    ])
  )
}

