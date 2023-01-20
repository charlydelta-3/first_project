const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require("cors");

const { ObjectId } = require('mongodb');

var corsOptions = {
    origin: "http://localhost:8081"
  };
  
  app.use(cors(corsOptions));
  

// Connexion à la base de données MongoDB
mongoose.connect("lien de connexion à votre base de données")

// Configuration de body-parser pour traiter les requêtes entrantes
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Modèle de données pour les articles
const Article = mongoose.model('utilisateurs', {
  _id:ObjectId,
    nom_user :String,
    pnom_user :String,
    citation :String,
    auteur :String,
    like:Number,
    username :String,
})
const Log = mongoose.model('users', {
  _id:ObjectId,
  username :String,
  citation :String,
  auteur :String,
  like:Number,
 
})

const Auteur = mongoose.model('auteurs', {
  _id:ObjectId,
  libelle :Array,
  auteur :String,
  like :Array,
  
 
})

// Obtenir tous les articles
app.get('/utilisateurs', (req, res) => {
  Article.find({}, (err, articles) => {
    if (err) return res.send(err)
    res.send(articles)
  })
})
// Obtenir tous les login
app.get('/login', (req, res) => {
  Log.find({}, (err, articles) => {
    if (err) return res.send(err)
    res.send(articles)
  })
})
// Obtenir les 10 meilleurs utilisateurs
app.get('/logins', function(req, res, next){
  Article.find().sort({like: -1}).limit(10)
  .then((utilisateurs) => {
  res.json(utilisateurs);
  })
  .catch((err) => {
  res.json(err);
  })
  });
// Obtenir tous les auteurs
app.get('/auteurs', (req, res) => {
  Auteur.find({}, (err, articles) => {
    if (err) return res.send(err)
    res.send(articles)
  })
})

// Obtenir un seul article
app.get('/utilisateurs/:id', (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    if (err) return res.send(err)
    res.send(article)
  })
})
// Obtenir un seul login
app.get('/login/:id', (req, res) => {
  Log.findById(req.params.id, (err, article) => {
    if (err) return res.send(err)
    res.send(article)
  })
})
// Obtenir un seul auteur
app.get('/auteurs/:id', (req, res) => {
  Auteur.findById(req.params.id, (err, article) => {
    if (err) return res.send(err)
    res.send(article)
  })
})

// Créer un nouvel article
app.post('/utilisateurs', (req, res) => {
  const article = new Article(req.body)
  article.save((err) => {
    if (err) return res.send(err)
    res.send('utilisateur ajouté avec succès !')
  })
})
// Créer un nouvel login
app.post('/login', (req, res) => {
  const article = new Log(req.body)
  article.save((err) => {
    if (err) return res.send(err)
    res.send('information ajoutée avec succès !')
  })
})

// Mettre à jour un article
app.put('/utilisateurs/:id', (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body, (err) => {
    if (err) return res.send(err)
    res.send('utilisateur mis à jour avec succès !')
  })
})

// Mettre à jour un login
app.put('/login/:id', (req, res) => {
  Log.findByIdAndUpdate(req.params.id, req.body, (err) => {
    if (err) return res.send(err)
    res.send('information mise à jour avec succès !')
  })
})
// Mettre à jour un auteur
app.put('/auteurs/:id', (req, res) => {
  Auteur.findByIdAndUpdate(req.params.id, req.body, (err) => {
    if (err) return res.send(err)
    res.send('information mise à jour avec succès !')
  })
})
// Mettre à jour un element de  auteur
app.patch('/auteurs/:id', (req, res) => {
  Auteur.findByIdAndUpdate(req.params.id, req.body, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

// Mettre à jour un element de  utilisateurs
app.patch('/utilisateurs/:id', (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});


// Supprimer un article
app.delete('/utilisateurs/:id', (req, res) => {
  Article.findByIdAndDelete(req.params.id, (err) => {
    if (err) return res.send(err)
    res.send('utilisateur supprimé avec succès !')
  })
})

// Supprimer un login
app.delete('/login/:id', (req, res) => {
  Log.findByIdAndDelete(req.params.id, (err) => {
    if (err) return res.send(err)
    res.send('login supprimé avec succès !')
  })
})

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000')
})
app.get("/", (req, res) => {
    res.json({ message: "application  delta fonctionne." });
  });
