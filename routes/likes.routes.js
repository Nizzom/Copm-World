const {Router} = require('express')
const Content = require('../models/Content')
const router = Router()

router.post('/like', async (req, res) => {
    try {
        const {id} = req.body
        const can = await Content.findById(id)

        if (can) {
            can.likes++
            await can.save()
            return res.json({liked:true})
          }
        res.status(400).json({message: 'Bunday Content mavjud emas'})
    } catch (e) {
        res.status(500).json({message: 'Nimadir xato yana urinib koring'})
    }
})

router.post('/dislike', async (req, res) => {
    try {
        const {id} = req.body
        const can = await Content.findById(id)

        if (can) {
            can.dislikes++
            await can.save()
            return res.json({disliked:true})
          }
        res.status(400).json({message: 'Bunday Content mavjud emas'})
    } catch (e) {
        res.status(500).json({message: 'Nimadir xato yana urinib koring'})
    }
})

module.exports = router