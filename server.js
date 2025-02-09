const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const todoRoutes = require("./routes/todos");
const restroomRoutes = require("./routes/restrooms");
const {
  getRestrooms,
  saveRestroom,
  renderMap,
} = require("./controllers/restroom");

require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

app.use(express.json()); // For JSON payloads
app.use(express.urlencoded({ extended: true }));
connectDB();

app.use("/api/restrooms/save", saveRestroom);
app.use("/api/restrooms", getRestrooms);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
// Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }, // Set to true if using HTTPS
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use("/", mainRoutes);
app.use("/todos", todoRoutes);
app.use("/restrooms", restroomRoutes);

app.get("/map", renderMap);

app.post("/api/restrooms/save", async (req, res) => {
  console.log("save restroom server.js");
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

app.get("/api/restrooms", () => {
  console.log("get restroom server.js");
  // return getRestrooms();
});

app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!!!!!!!");
});
