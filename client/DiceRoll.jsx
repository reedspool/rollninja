DiceRoll = React.createClass({
  propTypes: {
    roll: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <li>{this.props.roll.result[0]} {this.props.roll.result[1]}</li>
    );
  }
});

