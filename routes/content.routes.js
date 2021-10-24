const {Router} = require("express")
const Content = require('../models/Content')
const router = Router()
const mongo = require('mongoose')

router.post('/', async (req, res) => {
    try {
        const {id} = req.body
        const can = await Content.findOne({moth: mongo.Types.ObjectId(id)})


        if (!can) {
           return res.status(400).json({message: 'Bunaqa contnet mavjud emas'})
        }

        can.views++
        await can.save()

        res.status(200).json(can)
    } catch (e) {
        res.status(500).json({message: "Nimadir hato, content kelmadi, yana urinib koring"})
    }
})

module.exports = router