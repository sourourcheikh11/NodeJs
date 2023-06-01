<<<<<<< HEAD
const express = require('express');
const app = express();
const db = require("./models");
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
//BodyParser Middleware
app.use(express.json());
app.use(cors());
//cnx BD
db.sequelize.authenticate().then(() => {
console.log('Connection to DB has been established successfully.');
}).catch((error) => {
console.error('Unable to connect to the database: ', error);
});
app.get("/",(req,res)=>{
res.send("formation");
});
app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); });
const categorieRouter = require("./routes/categorie.route")
app.use('/api/categories', categorieRouter);
const scategorieRouter = require("./routes/scategorie.route")
app.use('/api/scategories', scategorieRouter);
const articleRouter = require("./routes/article.route")
app.use('/api/articles', articleRouter);
module.exports = app;
=======
const express=require('express');
const mongoose =require("mongoose")
const dotenv =require('dotenv')
dotenv.config()
const app = express();
//BodyParser Middleware
app.use(express.json());
mongoose.set("strictQuery", false);
// Connexion à la base données
mongoose.connect(process.env.DATABASE,{
   useNewUrlParser: true,
   useUnifiedTopology: true })
 .then(() => {console.log("Connexion à la base de données réussie"); }).catch(err => {
    console.log('Impossible de se connecter à la base de données', err);
    process.exit();
    });
    app.get("/",(req,res)=>{
    res.send("bonjour");
    });
    const categorieRouter =require("./routes/categories.route")
    app.use('/api/categories', categorieRouter); 
    const scategorieRouter =require("./routes/scategorie.route")
    app.use('/api/scategories', scategorieRouter);
    const articleRouter =require("./routes/article.route")
    app.use('/api/articles', articleRouter);  
    const userRouter =require("./routes/user.route")
    app.use('/api/users', userRouter); 
    app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`); });
    module.exports = app; 
>>>>>>> 0d9da100581d714aa57d7df8dbb8323fe00e6fb7
