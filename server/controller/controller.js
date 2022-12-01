var Userdb = require("../model/model");

// to save new user
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content is empty" });
    return;
  }
  const user = new Userdb({
    username: req.body.username,
    rollNo: req.body.rollNo,
  });
  user
    .save(user)
    .then((data) => {
      // res.send(data);
      res.redirect('/add-user');
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error 500",
      });
    });
};

exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Error 404" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error 500" });
      });
  } else {
    Userdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send(500).send({ message: err.message || "Error 500" });
      });
  }
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Error, check again" });
  }

  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindandModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Error 404" });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error 500" });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Error 404" });
      } else {
        res.send({
          message: "Done!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error 500",
      });
    });
};
