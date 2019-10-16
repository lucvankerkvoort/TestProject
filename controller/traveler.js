const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.Traveler.create(req.body).then(dbModel => res.json(dbModel));
  },
  read: function(req, res) {
    db.Traveler.find(req.body).then(dbModel => res.json(dbModel));
  },
  update: function(req, res) {
    db.Traveler.findByIdAndUpdate({ _id: req.params.id }).then(dbModel =>
      res.json(dbModel)
    );
  },
  delete: function(req, res) {
    db.Traveler.findByIdAndDelete({ _id: req.params.id }).then(dbModel =>
      res.json(dbModel)
    );
  }
};
