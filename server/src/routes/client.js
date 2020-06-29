const route = require('express').Router()
const crypto = require('crypto')
const db = require('../functions/db.js').getDB()
const validation = require('../functions/validation.js')


route.post('/login', validation.login, async (req, res) => {
    let {
        uid,
        pw
    } = req.body
    pw = crypto.createHash('md5').update(pw).digest('hex')

    try {
        let result = await db.collection('users').find({ UID: uid, PW: pw }).limit(1).toArray()
        if (result.length == 1) {
            req.session.uid = uid
            return res.json({
                success: 1
            })
        } else
            return res.json({
                success: 0,
                msg: 'check you id and password'
            })
    } catch (error) {
        return res.json({
            success: 0,
            msg: 'cant login right now'
        })
    }

})

route.post('/forgotpassword', async (req, res) => {
    let { uid, mobile, pw } = req.body
    try {
        let result = await db.collection('users').find({
            UID: uid, MOBILE: mobile
        }).limit(1).toArray()

        if (result.length == 1) {
            pw = crypto.createHash('md5').update(pw).digest('hex')
            result = await db.collection('users').updateOne({ UID: uid }, { $set: { PW: pw } })
            if (result.modifiedCount == 1)
                return res.json({ success: 1 })
            else
                return res.json({ success: 0, msg: 'try different password' })

        }
        else
            return res.json({ success: 0, msg: 'uid and mobile do not match' })

    }


    catch (err) {
        console.log(err);

        return res.json({
            success: 0,
            msg: 'server error'
        })
    }


})

route.post('/signup', validation.login, async (req, res) => {


    let {
        uid,
        pw,
        mobile
    } = req.body

    pw = crypto.createHash('md5').update(pw).digest('hex');
    try {
        let result = await db.collection('users').find({
            UID:uid
        }).limit(1).toArray()

        if (result.length == 1)
            return res.json({
                success: 0,
                msg: 'id already exist'
            })
        else {
            result = await db.collection('users').insertOne({
                UID:uid,
                PW:pw,
                MOBILE:mobile
            })
            if (result.insertedCount == 1)
                return res.json({
                    success: 1
                })
            else
                return res.json({
                    success: 0,
                    msg: 'cant signup right now'
                })
        }

    } catch (err) {
        return res.json({
            success: 0,
            msg: 'server error'
        })
    }

})

route.post('/logout', (req, res) => {
    if (req.session.uid)
        req.session.destroy()
    return res.json({
        success: 1
    })

})





module.exports = route