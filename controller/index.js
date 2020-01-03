const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.User.create(req.body).then(dbModel => res.json(dbModel));
  },
  read: function(req, res) {
    db.User.find(req.body).then(dbModel => res.json(dbModel));
  },
  update: function(req, res) {
    db.User.findByIdAndUpdate({ _id: req.params.id }).then(dbModel =>
      res.json(dbModel)
    );
  },
  delete: function(req, res) {
    db.User.findByIdAndDelete({ _id: req.params.id }).then(dbModel =>
      res.json(dbModel)
    );
  }
};
