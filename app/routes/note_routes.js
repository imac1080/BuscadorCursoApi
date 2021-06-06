 var ObjectID = require('mongodb').ObjectID

module.exports = function(app, db) {
   

    app.post("/buscarCurso",  async (req, res) => {
        db.collection('Cursos').find({ curso: req.body.curso}).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
          });
    });    
}