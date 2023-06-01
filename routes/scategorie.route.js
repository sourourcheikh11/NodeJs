<<<<<<< HEAD
var express = require('express');
var router = express.Router();
const db = require("../models");
const SCategorie=db.scategorie
const Categorie=db.categorie
// afficher la liste des scategories.
router.get('/', async (req, res, )=> {
await SCategorie.findAll({
include: [
{ model: Categorie,  as: "Categorie" }
]
}).then(data => {
res.send(data);
})
.catch(err => {
res.status(500).send({
message:
err.message || "Some error occurred while retrieving sous catégorie."
});
});
});
// créer une nouvelle scatégorie
router.post('/', async (req, res) => {
await SCategorie.create(req.body).then(data => {
res.send(data);
})
.catch(err => {
res.status(500).send(err)
});
});
// chercher une scatégorie
router.get('/:scategorieId',async(req, res)=>{
await SCategorie.findByPk(req.params.scategorieId)
.then(data => {
if(data) res.send(data);
else res.send({message:"not found"});
})
.catch(err => {
res.status(500).send({message:err.message || "Some error occurred while retrieving scategories." });
})
});
// modifier une scatégorie
router.put('/:scategorieId', async (req, res)=> {
const {scategorieId} = req.params
await SCategorie.update(req.body, {
where: {
id:scategorieId
}
}).then((result) => {
if(result[0]!=0) res.json("Enregistrement modifié");
else res.send({message:"not found"});
})
.catch (err=> {
res.send(err);
})
});
// Supprimer une scatégorie
router.delete('/:scategorieId', async (req, res)=> {
const { scategorieId } = req.params;
await SCategorie.findByPk(scategorieId).then(async(cat) => {
await cat.destroy().then(() => {
res.send(`SCatégorie num ${cat.id} est supprimée`);
})
.catch (err=>{ res.json({ message: err}); })
}).catch (err=>{ res.json({ message: 'Not Found'}); })
});
module.exports = router;
=======
const express = require('express');
const router = express.Router();
const SCategorie=require("../models/scategories")
// afficher la liste des categories.
router.get('/', async (req, res, )=> {
 try {
 const scat = await SCategorie.find();

 res.status(200).json(scat);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
});
// créer un nouvelle catégorie
router.post('/', async (req, res) => { const { nomscategorie, imagescat,categorieID} = req.body;
const newSCategorie = new SCategorie({nomscategorie:nomscategorie,
imagescat:imagescat,categorieID:categorieID })
try {
await newSCategorie.save();
res.status(200).json(newSCategorie );
} catch (error) {
res.status(404).json({ message: error.message });
}
});
// chercher une sous catégorie
router.get('/:scategorieId',async(req, res)=>{
try {
const scat = await
SCategorie.findById(req.params.scategorieId);

res.status(200).json(scat);
} catch (error) {
res.status(404).json({ message: error.message });
}
});
// modifier une catégorie
router.put('/:scategorieId', async (req, res)=> {
const { nomscategorie, imagescat,categorieID} = req.body;
const id = req.params.scategorieId;
try {const scat1 = {
    nomscategorie:nomscategorie,imagescat:imagescat,categorieID:categorieID
    , _id:id };
     await SCategorie.findByIdAndUpdate(id, scat1);
     res.json(scat1);
     } catch (error) {
     res.status(404).json({ message: error.message });
     }
    });
    // Supprimer une catégorie
    router.delete('/:scategorieId', async (req, res)=> {
     const id = req.params.scategorieId;
     await SCategorie.findByIdAndDelete(id);
     res.json({ message: "sous categorie deleted successfully." });
    });
    module.exports = router; 
>>>>>>> 0d9da100581d714aa57d7df8dbb8323fe00e6fb7
