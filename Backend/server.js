import app from './app.js'
import connectToMongo from './config/database.js';

connectToMongo();

app.listen(process.env.PORT, () => {
    console.log(`server is listing on port : ${process.env.PORT}`);
})