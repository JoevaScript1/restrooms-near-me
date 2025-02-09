const express = require("express");
const router = express.Router();
const {
  saveRestroom,
  getRestrooms,
  renderMap,
  getUserRestrooms,
} = require("../controllers/restroom"); // Ensure this path is correct and the functions are exported properly
const { ensureAuth } = require("../middleware/auth");

// Fetch all restrooms
router.get("/api/restrooms", () => {
  console.log("router get restroom");
  // return getRestrooms();
});

router.post("/api/restrooms/save", async () => {
  console.log("save restroom routes");
  const { name, street, distance, accessible, user } = req.body;
  const savedRestroom = await saveRestroom(
    name,
    street,
    distance,
    accessible,
    user
  );

  // console.log()
  res.send({ name, street, distance, accessible, user });
});

// Render map view
router.get("/map", renderMap);

// Fetch restrooms saved by the user (protected route)
router.get("/user/restrooms", ensureAuth, getUserRestrooms);

module.exports = router;
