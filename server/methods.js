
var Alea = Meteor.npmRequire('alea');

var prng = new Alea();

function randomInt(min, max) {
  return Math.floor(prng() * (max + 1 - min) + min);
}

function roll() {
  return Rolls.insert({
    createdAt: new Date(),
    result: [
      randomInt(1, 6),
      randomInt(1, 6)
    ]
  });
}

Meteor.startup(function () {
  Meteor.methods({
    roll: roll
  });
});
