const { Router } = require("express");
const Cat = require("../models/Cat");
const SubCat = require("../models/SubCat");
const ContTitle = require("../models/ContTitle");
const router = Router();

//   /api/cat

router.get("/", async (req, res) => {
  try {
    const cats = await Cat.find({});

    const subCats = await SubCat.find({});

    const contTitle = await ContTitle.find({});

    const nested = subCats.map((v) => {
      const id = JSON.stringify(v._id);
      let childern = contTitle.map((i) => {
        const iId = JSON.stringify(i.moth);
        if (id == iId) {
          return { text: i.text, id: i._id };
        }
      });
      return { subCategory: v, childern: childern };
    });

    const answer = cats.map((v) => {
      const id = JSON.stringify(v._id);
      let childern = nested.map((i) => {
        const iId = JSON.stringify(i.subCategory.moth);
        if (id == iId) {
          return { subCategory: i.subCategory, childern: i.childern };
        }
      });
      return { category: v, childern: childern };
    });

    res.json(answer);
  } catch (e) {
    res.status(500).json({ message: "Nimadir xato yana urinib koring" });
  }
});

module.exports = router;
