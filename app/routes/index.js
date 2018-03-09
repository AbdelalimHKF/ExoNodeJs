const exoRoutes = require('./exo_routes');
const webRoutes = require('./web_routes');
module.exports = function(app) {
  exoRoutes(app);
  webRoutes(app);
  // Other route groups could go here, in the future
};