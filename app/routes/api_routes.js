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

  // add to the friends data
  app.post("/api/friends", function(req, res)
  {
    var match_index = 0;
    var match_diff, old_match_diff = 50;
    var new_friend = { name: req.body.name, photo: req.body.photo, scores: req.body['scores[]'] };

    console.log("survey new_friend,", new_friend);

    // find a match vs existing friends
    for (var i = 0; i < friend_data.length; ++i)
    {
      match_diff = 0;
      for (var j = 0; j < friend_data[i].scores.length; ++j)
      {
        // console.log("new_friend.scores[j],", new_friend.scores[j], "friend_data[i].scores[j]", friend_data[i].scores[j]);
        match_diff += Math.abs(new_friend.scores[j] - friend_data[i].scores[j]);
      }
      if (match_diff < old_match_diff)
      {
        match_index = i;
        old_match_diff = match_diff;
      }
    }

    // add the new friend to the list
    friend_data.push(new_friend);

    // respond with the matched friend
    res.json({name: friend_data[match_index].name, photo: friend_data[match_index].photo});
  });
};
