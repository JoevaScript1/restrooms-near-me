const fetch = require("node-fetch");
const Restroom = require("../models/Restrooms");
const User = require("../models/User");

const getRestrooms = async (req, res) => {
  console.log("test");
  try {
    const { latitude, longitude, numberOnPage = 50, page = 1 } = req.query;

    if (!latitude || !longitude) {
      return res.status(400).send("Latitude and longitude are required!!!!!!!");
    }

    const response = await fetch(
      `https://www.refugerestrooms.org/api/v1/restrooms/by_location?lat=${latitude}&lng=${longitude}&per_page=${numberOnPage}&page=${page}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    res.render("restrooms", { restrooms: data });
  } catch (error) {
    console.error("Error fetching restrooms:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

const renderMap = (req, res) => {
  res.render("map");
};

async function saveRestroom({ name, street, distance, accessible, user }) {
  try {
    const payload = {
      name: name || "Unnamed Restroom",
      street: street || "Not available",
      distance: parseFloat(distance) || 0,
      accessible: Boolean(accessible),
      user,
    };

    console.log("Payload being saved:", payload);

    const restroom = await Restroom.create(payload);
    return restroom; // Return created restroom
  } catch (error) {
    console.error("Error saving restroom:", error);
    throw error; // Ensure the error is caught in route handlers
  }
}

const getUserRestrooms = async (req, res) => {
  try {
    console.log("Fetching user restrooms for:", req.user); // Debugging
    const restrooms = await Restroom.find({ user: req.user.id }).lean();
    res.render("user-restrooms", { restrooms });
  } catch (err) {
    console.error(err);
    res.redirect("/"); // Fallback in case of error
  }
};

module.exports = {
  getRestrooms,
  renderMap,
  saveRestroom,
  getUserRestrooms,
};
