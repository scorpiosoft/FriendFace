// get the friends data
var friend_data = require("../data/friends");

// the API routes
module.exports = function(app)
{
  // API GET Requests - a.k.a. 'visit' requests

  // serve up the friends data
  app.get("/api/friends", function(req, res)
  {
    res.json(friend_data);
  });

  // API POST Requests - a.k.a. 'submit' requests

  // add to the firends data
  app.post("/api/friends", function(req, res)
  {
    tableData.push(req.body);
  });
};
