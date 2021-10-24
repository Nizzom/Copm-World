const { Router } = require("express");
const Comment = require("../models/Comment");
const router = Router();
const {check, validationResult} = require('express-validator')

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
  "/",
  [
    check("author", "Max size: 24").isLength({ max: 24 }),
    check("text", "Min size: 2, Max size: 180").isLength({ min: 2, max: 300 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Uncurrect dates in comment",
        });
      }
      const { author, text, moth } = req.body;

      const can = new Comment({ author, text, moth });

      await can.save();

      res.json({ message: "Comment qoshildi" });
    } catch (e) {
      res.status(500).json({ message: "Nimadir xato yana urinib koring" });
    }
  }
);

module.exports = router;
