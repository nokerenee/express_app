const friends = require("../models/friends");

const filterFriends = (req, res) => {
  let filterGender = req.query.gender;
  let filterLetter = req.query.letter;
  let matchingFriends = [...friends];

  if (filterGender) {
    matchingFriends = matchingFriends.filter(
      (friend) => friend.gender == filterGender
    );
  }

  if (filterLetter) {
    matchingFriends = matchingFriends.filter((friend) =>
      friend.name.toLowerCase().startsWith(filterLetter.toLowerCase())
    );
  }

  if (matchingFriends.length > 0) {
    // return valid data when the criteria matches
    res.status(200).json(matchingFriends);
  } else {
    // and an error response when there are no matches
    res.status(404).json({ error: "No friends matching criteria" });
  }
};

const infoFriends = (req, res) => {
  const {
    "user-agent": userAgent,
    "content-type": contentType,
    accept,
  } = req.headers;
  console.log(req.headers);

  // Modify this response to just return info on the user-agent, content-type and accept headers
  res.json({ userAgent, contentType, accept });
};

const findFriends = (req, res) => {
  let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path

  // Modify this function to find and return the friend matching the given ID, or a 404 if not found
  let friend = friends.find((friend) => friend.id == friendId);

  // Modify this response with the matched friend, or a 404 if not found
  friend
    ? res.status(200).json({ result: friend })
    : res.status(404).json({ result: `Friend ${friendId} not found` });
};

const addFriends = (req, res) => {
  let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
  console.log(newFriend); // 'body' will now be an object containing data sent via the request body

  // we can add some validation here to make sure the new friend object matches the right pattern
  if (!newFriend.name || !newFriend.gender) {
    res
      .status(500)
      .json({ error: "Friend object must contain a name and gender" });
    return;
  } else if (!newFriend.id) {
    newFriend.id = friends.length + 1; // generate an ID if one is not present
  }

  // if the new friend is valid, add them to the list and return the successfully added object
  friends.push(newFriend);
  res.status(200).json(newFriend);
};

const updateFriends = (req, res) => {
  let friendId = req.params.id;
  let updatedFriend = req.body;

  // Replace the old friend data for friendId with the new data from updatedFriend
  const index = friends.findIndex((friend) => friend.id == friendId);

  // Modify this response with the updated friend, or a 404 if not found
  if (index !== -1) {
    // Replace the old friend data for friendId with the new data from updatedFriend
    friends[index] = { ...friends[index], ...updatedFriend };

    res.status(200).json({
      result: "Updated friend with ID " + friendId,
      data: friends[index],
    });
  } else {
    res.status(404).json({ error: "Friend not found" });
  }
};

module.exports = {
  filterFriends,
  infoFriends,
  findFriends,
  addFriends,
  updateFriends,
};
