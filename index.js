const express= require('express')


const app= express()

app.get('/demo', (req, res)=>{

    res.send('hello mehtab kya hal h mje me')

})

app.listen(3000)