const express = require('express')
const cors = require('cors')
const ratelimit = require('express-rate-limit')
const { rateLimit } = require('express-rate-limit')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

//Rate Limiting
const limiter = rateLimit ({
    windowsMs: 10 * 60 * 1000, //10 Minutes 
    max: 200
})
app.use(limiter)
app.set('trust proxy',1)

//Routes
app.use('/api', require('./routes'))
app.use('/music-projects', require('./routes/music-projects'))
app.use('/kjm', require('./routes/music-home'))
app.use('/artist-profiles', require('./routes/artist-profiles'))
app.use('/comic-projects', require('./routes/comic-projects'))

//Enable cors
app.use(cors())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))