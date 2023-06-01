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