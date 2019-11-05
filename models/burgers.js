var orm = require("../config/orm.js");

// create the code that will call the ORM functions using burger specific input
// for the ORM.
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    createOne: function(cols, vals, cb) {
        orm.createOne("burgeres", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function() {
            cb(res);
        });
    }
}

module.exports = burger;