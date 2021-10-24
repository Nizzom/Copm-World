const { Router } = require("express");
const ContTitle = require("../models/ContTitle");
const router = Router();
const {check, validationResult} = require("express-validator")

//   /api/cat

router.post(
  "/add",
  [check("text", "Min size: 2, Max size: 180").isLength({ min: 2, max: 180 })],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Uncurrect dates in categories",
        });
      }

      const { text, moth } = req.body;

      const contTitle = new ContTitle({ text, moth });

      await contTitle.save(function (err) {
        if (err) {
          console.log(err);
          return;
        }
      });
      res.status(201).json({ message: "Content Title qoshildi" });
    } catch (e) {
      res.status(500).json({ message: "Nimadir xato yana urinib koring" });
    }
  }
);

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params.id;

    const can = await ContTitle.findOne({ id });

    if (!can) {
      return res
        .status(400)
        .json({ message: "Bunaqa Content Title mavjud emas" });
    }

    res.json(can);
  } catch (e) {
    res.status(500).json({ message: "Nimadir xato yana urinib koring" });
  }
});

router.delete("/del/:id", async (req, res) => {
  try {
    const { id } = req.params.id;

    const can = await ContTitle.findByIdAndDelete({ id });

    if (!can) {
      return res
        .status(400)
        .json({ message: "Bunaqa Content Title mavjud emas" });
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

    const can = await ContTitle.findByIdAndUpdate(id, update);

    if (!can) {
      return res
        .status(400)
        .json({ message: "Bunaqa Content Title mavjud emas" });
    }

    res.json({ updated: true, _id: can._id });
  } catch (e) {
    res.status(500).json({ message: "Nimadir xato yana urinib koring" });
  }
});

module.exports = router;
