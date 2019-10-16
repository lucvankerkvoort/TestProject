const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.Guide.create(req.body).then(dbModel => res.json(dbModel));
  },
  read: function(req, res) {
    db.Guide.find(req.body).then(dbModel => res.json(dbModel));
  },
  update: function(req, res) {
    db.Guide.findByIdAndUpdate({ _id: req.params.id }).then(dbModel =>
      res.json(dbModel)
    );
  },
  delete: function(req, res) {
    db.Guide.findByIdAndDelete({ _id: req.params.id }).then(dbModel =>
      res.json(dbModel)
    );
  }
};
