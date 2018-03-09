const exoRoutes = require('./exo_routes');

module.exports = function(app) {
  exoRoutes(app);
  // Other route groups could go here, in the future
};