const url = require('url')
const express = require('express')
const router = express.Router()
const needle = require('needle')
const apicache = require('apicache')

//Env vars
const API_BASE_URL = process.env.API_BASE_URL +'/music-projects'
const API_KEY_VALUE = process.env.API_KEY_VALUE

//Init cache
let cache = apicache.middleware
router.get('/', cache('2 minutes'), async(req,res) => {
    try {
    const params = new URLSearchParams({
        ...url.parse(req.url, true).query,
    })

    const apiRes = await needle('get',`${API_BASE_URL}?${params}`,
    { headers: { "Authorization": `Bearer ${API_KEY_VALUE}` } })
    const data = apiRes.body

    //Log the request to the public API
    if (process.env.NODE_ENV !== 'production'){
        console.log(`REQUEST: ${API_BASE_URL}?{params}`)
    }

    res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error})
    }

})

module.exports = router 