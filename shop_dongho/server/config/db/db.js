import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

async function connectDB(){

    // Ket noi mongodb tren may
    const url = 'mongodb://localhost:2717/shop?retryWrites=true&w=majority'


    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        console.log("Đã kết nối tới mongodb thành công - cửa hàng đồng hồ Tân Tân")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;