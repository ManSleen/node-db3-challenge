const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id });
}

function findSteps(id) {
  return db("schemes as sc")
    .innerJoin("steps as s", "s.scheme_id", "=", "sc.id")
    .select("sc.scheme_name", "s.step_number", "s.instructions")
    .where({ "sc.id": id })
    .orderBy("s.step_number");
}

function add(scheme) {
  return db("schemes").insert(scheme);
}
