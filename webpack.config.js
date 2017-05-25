function buildConfig(env) {
    console.log(env);
  return require(`./webpack.${env}.config.js`)()
}

module.exports = buildConfig;
