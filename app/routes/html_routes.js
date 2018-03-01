var path = require("path");

// the HTML routes
module.exports = function(app)
{
  // HTML GET Requests - a.k.a. 'visit' requests

  // the survey page
  app.get("/survey", function(req, res)
  {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  // default to the home page
  app.get("*", function(req, res)
  {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
