const path = require("path");

// Routing
module.exports = function(app) {
  //HTML GET Routes
    app.get("/", function(req, res) {
      res.json(path.join(__dirname, "..public/index.html"));
    });
  app.get('/notes', function(req, res) {
      // "/notes" responds with the notes.html file
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });
  // All other routes respond with the index.html file
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};



