const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
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

function addStep(step, id) {
  return db("steps")
    .insert(step)
    .where({ scheme_id: id });
}

function update(changes, id) {
  return db("schemes")
    .update(changes)
    .where({ id });
}

function remove(id) {
  return db("schemes")
    .del()
    .where({ id });
}
