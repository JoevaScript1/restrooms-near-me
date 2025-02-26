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
router.get("/", getRestrooms);
console.log("router get restroom");

router.post("/save", ensureAuth, async (req, res) => {
  try {
    console.log("save restroom routes");

    // Ensure user ID comes from the authenticated session
    const userId = req.user ? req.user._id : null;
    if (!userId) {
      return res
        .status(401)
        .json({ error: "Unauthorized: User ID is missing" });
    }

    // Pass req.body along with the user ID
    const savedRestroom = await saveRestroom({ ...req.body, user: userId });

    res.status(200).json(savedRestroom);
  } catch (error) {
    console.error("Error saving restroom:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Render map view
router.get("/map", renderMap);

// Fetch restrooms saved by the user (protected route)
// router.get("/user/restrooms", ensureAuth, getUserRestrooms);

module.exports = router;
