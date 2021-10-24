const { Router } = require("express");
const SubCat = require("../models/SubCat");
const router = Router();
const {check, validationResult} = require("express-validator")

//   /api/cat

router.post(
  "/add",
  [check("text", "Min size: 2, Max size: 180").isLength({ min: 2, max: 180 })],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Uncurrect dates in categories",
        });
      }
      
      const { text, moth } = req.body;

      const subcat = new SubCat({ text, moth });

      await subcat.save();

      res.status(201).json({ message: "Subategoriya qoshildi" });
    } catch (e) {
      res.status(500).json({ message: "Nimadir xato yana urinib koring" });
    }
  }
);

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params.id;

    const can = await SubCat.findOne({ id });

    if (!can) {
      return res
        .status(400)
        .json({ message: "Bunaqa Subategoriya mavjud emas" });
    }

    res.json(can);
  } catch (e) {
    res.status(500).json({ message: "Nimadir xato yana urinib koring" });
  }
});

router.delete("/del/:id", async (req, res) => {
  try {
    const { id } = req.params.id;

    const can = await SubCat.findByIdAndDelete({ id });

    if (!can) {
      return res
        .status(400)
        .json({ message: "Bunaqa Subategoriya mavjud emas" });
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

    const can = await SubCat.findByIdAndUpdate(id, update);

    if (!can) {
      return res
        .status(400)
        .json({ message: "Bunaqa Subategoriya mavjud emas" });
    }

    res.json({ updated: true, _id: can._id });
  } catch (e) {
    res.status(500).json({ message: "Nimadir xato yana urinib koring" });
  }
});

module.exports = router;
