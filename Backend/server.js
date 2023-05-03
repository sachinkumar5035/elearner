import app from './app.js'


app.listen(process.env.PORT, () => {
    console.log(`server is listing on port : ${process.env.PORT}`);
})