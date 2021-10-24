const {Router} = require('express')
const Content = require('../models/Content')
const router = Router()

router.get('/liked', async ( req, res) => {
    try {
        const can = await Content.find({}).sort({ likes: -1 }).limit(1).then(goods => goods[0]);
        if(can) {
            can.views++
        }
        await can.save()
        res.json(can)
    } catch (e) {
        res.status(500).json({message: 'Nimadir xato yana urinib koring'})
    }


})

router.get('/disliked', async ( req, res) => {
    try {
        const can = await Content.find({}).sort({ dislikes: -1 }).limit(1).then(goods => goods[0]);
        if(can) {
            can.views++
        }
        await can.save()
        res.json(can)
    } catch (e) {
        res.status(500).json({message: 'Nimadir xato yana urinib koring'})
    }


})

router.get('/views', async ( req, res) => {
    try {
        const can = await Content.find({}).sort({ views: -1 }).limit(1).then(goods => goods[0]);
        if(can) {
            can.views++
        }
        await can.save()
        res.json(can)
    } catch (e) {
        res.status(500).json({message: 'Nimadir xato yana urinib koring'})
    }


})

module.exports = router