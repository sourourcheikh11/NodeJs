const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
//Register
router.post('/', async (req, res, )=> {
const{nom,adress,email,password,role}=req.body;
const salt=await bcrypt.genSalt(10);
const hash=await bcrypt.hash(password,salt);
const newUser=new User({
nom:nom,
adress:adress,
email:email,
password:hash,
role:role
});
try {
await newUser.save();
res.status(201).json(newUser );
} catch (error) {
res.status(409).json({ message: error.message });
}
});
//Login
router.post('/login', async (req, res, )=> {
try { console.log(req.body);
const{email,password}=req.body;
const user = await User.findOne({email});
if(user==""){ res.status(401).send('utilisateur non existant');
return} ;
const isMatch=await bcrypt.compare(password,user.password);
if(!isMatch) {res.status(400).json({msg:'mot de passe incorrect'});
return;}
// if(user.role!=1) throw Error('Accès authorisé sauf pour admin');
const accessToken = generateAccessToken(user);
res.status(200).json({
accessToken,
user
})
} catch (error) {
res.status(404).json({ message: error.message });
}
});
//Access Token
const generateAccessToken=(user) =>{
return jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, { expiresIn:
'3600s' });
}
module.exports = router;