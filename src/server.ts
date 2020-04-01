import express from 'express'
import ExpressGA from 'express-universal-analytics'

const app = express() 


app.use(ExpressGA({
    uaCode: 'UA-1234567-1',
    cookieName: '_ga'
}))

app.get('/', (req, res) => {

    req.visitor?.setUid('111')
    res.send('Hello World')
})


app.listen(3333, () => {
    console.log('server started on http://localhost:3333')
})