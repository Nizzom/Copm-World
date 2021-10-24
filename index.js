const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();
const options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["htm", "html"],
  index: false,
  maxAge: "1d",
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Date.now());
  },
};

app.use(express.json({ extended: true }));
app.use(express.static("public", options));


// client API's

//API for categories with content title
app.use("/api/cat", require("./routes/categories.routes"));
//API for content
app.use("/api/cont", require("./routes/content.routes"));
//API for likes and dislikes
app.use("/api", require("./routes/likes.routes"));
//API for comments
app.use("/api/comment", require("./routes/comment.routes"));

// get the most liked Content
// get the most disliked Content
// get Content with the most Views
app.use("/api/most", require("./routes/most.routes"));

// Admin API's

//API for categories
app.use("/admin/categories", require("./adminRoutes/categories.routes"));
//API for subcategories
app.use("/admin/subcategories", require("./adminRoutes/subcategories.routes"));
//API for content title
app.use("/admin/title", require("./adminRoutes/content_title.routes"));
//API for content
app.use("/admin/content", require("./adminRoutes/content.routes"));
//API for likes and dislikes
app.use("/admin/like", require("./adminRoutes/likes.routes"));
//API for comments
app.use("/admin/comment", require("./adminRoutes/comment.routes"));

const PORT = config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUrl"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () =>
      console.log(`App has been started on port ${PORT}...`)
    );
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}

start();
