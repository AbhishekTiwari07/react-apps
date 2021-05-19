import mongoose from 'mongoose'

// const url = 'mongodb://127.0.0.1:27017'
const url = 'mongodb+srv://root:1234@cluster.7xwp7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
