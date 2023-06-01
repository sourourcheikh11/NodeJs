<<<<<<< HEAD
var express = require('express');
var router = express.Router();
const db = require("../models");
const Article=db.article
const SCategorie=db.scategorie
const Categorie=db.categorie
// afficher la liste des articles.
router.get('/', async (req, res, )=> {
await Article.findAll({
include: [
{ model: SCategorie, as: 'scategorie',
include: [
{ model: Categorie, as: 'Categorie' }
] }
]
}).then(data => {
res.send(data);
})
.catch(err => {
res.status(500).send({
message:
err.message || "Some error occurred while retrieving articles."
});
});
});
// créer un nouvel article
router.post('/', async (req, res) => {
await Article.create(req.body).then(data => {
res.send(data);
})
.catch(err => {
res.status(500).send(err)
});
});
// chercher un article
router.get('/:articleId',async(req, res)=>{
await Article.findByPk(req.params.articleId)
.then(data => {
if(data) res.send(data);
else res.send({message:"not found"});
})
.catch(err => {
res.status(500).send({message:err.message || "Some error occurred while retrieving article." });
})
});
// modifier un article
router.put('/:articleId', async (req, res)=> {
const {articleId} = req.params
await Article.update(req.body, {
where: {
id:articleId
}
}).then((result) => {
if(result[0]!=0) res.json("Enregistrement modifié");
else res.send({message:"not found"});
})
.catch (err=> {
res.send(err);
})
});
// Supprimer un article
router.delete('/:articleId', async (req, res)=> {
const { articleId } = req.params;
await Article.findByPk(articleId).then(async(cat) => {
await cat.destroy().then(() => {
res.send(`Article num ${cat.id} est supprimé`);
})
.catch (err=>{ res.json({ message: err}); })
}).catch (err=>{ res.json({ message: 'Not Found'}); })
});
module.exports = router;
=======
const express = require('express');
const router = express.Router(); 
const Article=require("../models/article")
// afficher la liste des articles.
router.get('/', async (req, res, )=> {
 try {
 const articles = await Article.find();

 res.status(200).json(articles);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
});
// créer un nouvel article
router.post('/', async (req, res) => {

 const nouvarticle = new Article(req.body)
 try {
 await nouvarticle.save();
 res.status(200).json(nouvarticle );
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
});
// chercher un article
router.get('/:articleId',async(req, res)=>{
 try {
 const art = await Article.findById(req.params.articleId);

 res.status(200).json(art);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
});
// modifier un article
router.put('/:articleId', async (req, res)=> {
 const { reference,
designation,prix,marque,qtestock,imageart,scategorieID} = req.body;
 const id = req.params.articleId;
 try {const art1 = {
    reference:reference,designation:designation,prix:prix,marque:marque,qte,
    stock:qtestock,imageart:imageart,scategorieID:scategorieID, _id:id };
     await Article.findByIdAndUpdate(id, art1);
     res.json(art1);
     } catch (error) {
     res.status(404).json({ message: error.message });
     }
    });
    // Supprimer un article
    router.delete('/:articleId', async (req, res)=> {
     const id = req.params.articleId;
     await Article.findByIdAndDelete(id);
     res.json({ message: "article deleted successfully." });
    });
    module.exports = router; 
    
>>>>>>> 0d9da100581d714aa57d7df8dbb8323fe00e6fb7
