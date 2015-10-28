PreviousRolls = React.createClass({
  renderRolls() {
    return this.props.rolls.map((roll) => {
      return <li key={roll._id}><DiceRoll roll={roll} /></li>;
    });
  },

  render() {
    return (
      <ul className="roll-list">
        {this.renderRolls()}
      </ul>
    )
  }
});
