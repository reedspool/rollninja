DiceRoll = React.createClass({
  propTypes: {
    roll: React.PropTypes.object.isRequired
  },

  render() {
    const roll = this.props.roll;
    const dice = roll.dice.map((die, i) => {
      return (<li key={i}><SVGSixSidedDie value={die.result} />:&nbsp;<span>{die.result}</span></li>)
    });
    return (
      <span>
        <a href={'/' + roll._id}>{moment(roll.createdAt).format('l LT') + ' - '}</a>
        <ul className="die-list-small">{dice}</ul>
        {roll.comment ? ' - ' + roll.comment : ''}
      </span>
    );
  }
});

