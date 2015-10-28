Roll = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      roll: Rolls.findOne(this.props.rollId)
    };
  },

  renderComment(roll) {
    if (roll && roll.comment) {
      return (
        <h3>{roll.comment}</h3>
      )
    }
  },

  // TODO: This utility seems like it could be better placed
  total(roll) {
    return roll.dice.reduce((total, die) => {
            return total + die.result;
          }, 0)
  },

  renderTotal(roll) {
    if (roll) {
      return (
        <p>
          <strong>Total:</strong> {this.total(roll)}
        </p>
      )
    }
  },

  render() {
    const roll = this.data.roll;
    return (
      <div className="roll">
        <p>
          <a href="/" className="button roll-again">Roll Again</a>
        </p>
        {this.renderComment(roll)}
        {this.renderTotal(roll)}
        <BigDiceRoll roll={roll} />
        <SVGShareImage roll={roll} />
      </div>
    );
  }
});
