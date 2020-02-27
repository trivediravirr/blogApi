const express = require ('express');
const mongoose = require ('mongoose');

const app = express();
const mongouri = "mongodb://localhost/blog";

mongoose.connect(mongouri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('database is connected'))
.catch((e) => console.log(e));

app.set('views','./views');

app.set('view engine', 'ejs');


app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.get('/',(req,res) =>{
//     // res.sendFile(__dirname + '/index.html')
//     res.render('index');
// });

const route = require('./api/route/blogRoute');
route(app);

app.use((req, res) => {
    // res.sendFile(__dirname+'/index.html')
    res.status(400).send({url:req.originalUrl+' not found'});
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is running in ${port}`);
});
