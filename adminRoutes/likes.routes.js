const {Router} = require('express')
const Content = require('../models/Content')
const router = Router()

router.get('/like/:id', async (req, res) => {
    try {
        const {id} = req.params.id
        const can = await Content.findOne({id})

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

router.get('/deslike/:id', async (req, res) => {
    try {
        const {id} = req.params.id
        const can = await Content.findOne({id})

        if (can) {
            can.dislikes++
            await can.save()
            return res.json({liked:true})
          }
        res.status(400).json({message: 'Bunday Content mavjud emas'})
    } catch (e) {
        res.status(500).json({message: 'Nimadir xato yana urinib koring'})
    }
})



module.exports = router