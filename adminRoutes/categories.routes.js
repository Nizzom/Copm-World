const { Router } = require("express");
const Cat = require("../models/Cat");
const router = Router();
const {check, validationResult} = require("express-validator")

//   /api/cat

router.post(
  "/add",
  [
    check("text", "Min size: 2, Max size: 180").isLength({ min: 2, max: 180 }),
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

      const { text } = req.body;

      const can = await Cat.findOne({ text });

      if (can) {
        return res.status(400).json({ message: "Bunaqa Categoriya mavjud" });
      }

      const cat = new Cat({ text });

      await cat.save();

      res.status(201).json({ message: "Categoriya qoshildi" });
    } catch (e) {
      res.status(500).json({ message: "Nimadir xato yana urinib koring" });
    }
  }
);

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params.id;

    const can = await Cat.findOne({ id });

    if (!can) {
      return res.status(400).json({ message: "Bunaqa Categoriya mavjud emas" });
    }

    res.json(can);
  } catch (e) {
    res.status(500).json({ message: "Nimadir xato yana urinib koring" });
  }
});

router.delete("/del/:id", async (req, res) => {
  try {
    const { id } = req.params.id;

    const can = await Cat.findByIdAndDelete({ id });

    if (!can) {
      return res.status(400).json({ message: "Bunaqa Categoriya mavjud emas" });
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

    const can = await Cat.findByIdAndUpdate(id, update);

    if (!can) {
      return res.status(400).json({ message: "Bunaqa Categoriya mavjud emas" });
    }

    res.json({ updated: true, _id: can._id });
  } catch (e) {
    res.status(500).json({ message: "Nimadir xato yana urinib koring" });
  }
});

module.exports = router;
