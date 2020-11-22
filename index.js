require('dotenv').config()
const app = require('./src/app')

app.listen(process.env.PORT, err => {
    if(err)
        console.log(`Error: ${err}`)
})

console.log(`Server running in ${process.env.NODE_ENV} at PORT: ${process.env.PORT}`)