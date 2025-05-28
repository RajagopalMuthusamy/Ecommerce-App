const mongoose = require('mongoose')

const connectDatabase=()=>{
            mongoose.connect(process.env.DB_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                 })
            .then((con)=>{
                console.log('MongoDB Connected to Host: '+con.connection.host)
                })
            .catch(err => console.error('MongoDB connection error:', err))
}

module.exports=connectDatabase