const { Router } = require("express");
const Comment = require("../models/Comment");
const router = Router();
const {check, validationResult} = require("express-validator")

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params.id;
    const can = Comment.findOne({ moth: id });

    if (!can) {
      res.json({});
    }

    res.json(can);
  } catch (e) {
    res.status(500).json({ message: "Nimadir xato yana urinib koring" });
  }
});

router.post(
  "/:id",
  [
    check("author", "Max size: 24").isLength({ max: 24 }),
    check("text", "Min size: 2, Max size: 180").isLength({ min: 2, max: 300 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Uncurrect dates in comment",
        });
      }

      const { id } = req.params.id;
      const { author, text } = req.body;

      const can = new Comment({ author, text, moth: id });

      await can.save();

      res.json({ message: "Comment qoshildi" });
    } catch (e) {
      res.status(500).json({ message: "Nimadir xato yana urinib koring" });
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const can = await Comment.find({});
    res.json(can);
  } catch (e) {
    res.status(500).json({ message: "Nimadir xato yana urinib koring" });
  }
});

router.delete("/del/:id", async (req, res) => {
  try {
    const { id } = req.params.id;
    const can = Comment.findByIdAndDelete({ id });

    if (!can) {
      res.json({});
    }

    res.json({ deleted: true, can });
  } catch (e) {
    res.status(500).json({ message: "Nimadir xato yana urinib koring" });
  }
});

module.exports = router;
