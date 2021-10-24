const { Router } = require("express");
const Content = require("../models/Content");
const router = Router();
const { check, validationResult } = require("express-validator");

router.post(
  "/add",
  [
    check("title", "Min size: 2, Max size: 200").isLength({ min: 2, max: 200 }),
    check("header", "Min size: 2, Max size: 500").isLength({
      min: 2,
      max: 500,
    }),
    check("part_1", "Part_1 is uncorrect").isObject(),
    check("part_2", "Part_2 is uncorrect").isObject(),
    check("part_3", "Part_3 is uncorrect").isObject(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Uncurrect dates in categories",
        });
      }

      const { title, img, header, part_1, part_2, part_3, moth } = req.body;

      const can = new Content({
        title,
        img,
        header,
        part_1,
        part_2,
        part_3,
        moth,
      });

      await can.save();
      res.json(can);
    } catch (e) {
      res.status(500).json({ message: "Nimadir xato yana urinib koring" });
    }
  }
);

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params.id;
    const can = await Content.findOne({ moth: id });

    if (!can) {
      res.status(400).json({ message: "Bunaqa contnet mavjud emas" });
    }

    res.json(can);
  } catch (e) {
    res.status(500).json({ message: "Nimadir xato yana urinib koring" });
  }
});

router.delete("/del/:id", async (req, res) => {
  try {
    const { id } = req.params.id;

    const can = await Content.findOneAndDelete({ id });

    if (!can) {
      return res.status(400).json({ message: "Bunaqa Content mavjud emas" });
    }

    res.json({ deleted: true, _id: can._id });
  } catch (e) {
    res.status(500).json({ message: "Nimadir xato yana urinib koring" });
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params.id;
    const { update } = req.body;

    const can = await Content.findByIdAndUpdate(id, update);

    if (!can) {
      return res.status(400).json({ message: "Bunaqa Content mavjud emas" });
    }

    res.json({ updated: true, _id: can._id });
  } catch (e) {
    res.status(500).json({ message: "Nimadir xato yana urinib koring" });
  }
});

module.exports = router;
