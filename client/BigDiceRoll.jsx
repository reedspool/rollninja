BigDiceRoll = React.createClass({
  propTypes: {
    roll: React.PropTypes.object.isRequired
  },

  render() {
    const roll = this.props.roll;
    if (!roll) {
      return (<div></div>)
    }
    const dice = roll.dice.map((die, i) => {
      // return (<li key={i}>{die.result}</li>)
      return <SVGSixSidedDie key={i} value={die.result} />;
    });
    return (
      <div class="big-dice-roll">
        <ul className="die-list-big">{dice}</ul>
      </div>
    );
  }
});

