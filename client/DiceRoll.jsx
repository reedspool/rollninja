DiceRoll = React.createClass({
  propTypes: {
    roll: React.PropTypes.object.isRequired
  },

  render() {
    const roll = this.props.roll;
    const dice = roll.dice.map((die, i) => {
      return (<li key={i}>{die.result}</li>)
    });
    return (
      <li>
        {moment(roll.createdAt).format('l LT') + ' - '}
        <ul className="die-list-small">{dice}</ul>
        {roll.comment ? ' - ' + roll.comment : ''}
      </li>
    );
  }
});

