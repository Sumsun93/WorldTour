const package = require('./package.json');
const brunchConfig = require('config-oclock-front/brunch');
exports.config = brunchConfig(package, {
  /* extra config */
});
