
const Alea = Meteor.npmRequire('alea');

const prng = new Alea();

function randomInt(min, max) {
  return Math.floor(prng() * (max + 1 - min) + min);
}

function roll(comment, dieCount) {
  const sides = 6;
  const dice = _.range(dieCount).map(() => {
    return {
      sides: sides,
      result: randomInt(1, sides)
    };
  });
  return Rolls.insert({
    createdAt: new Date(),
    comment: comment,
    dice: dice
  });
}

Meteor.methods({
  roll: roll
});

Meteor.publish('rolls', () => {
  return Rolls.find();
});
