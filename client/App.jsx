App = React.createClass({
  mixins: [ReactMeteorData],
  // Loads items from the Tasks collection and puts them on this.data.tasks

  getMeteorData() {
    return {
      rolls: Rolls.find({}, {sort: {createdAt: -1}}).fetch()
    }
  },

  renderRolls() {
    return this.data.rolls.map((roll) => {
      return <DiceRoll key={roll._id} roll={roll} />;
    });
  },

  handleSubmit(event) {
    event.preventDefault();
    const comment = React.findDOMNode(this.refs.comment).value.trim();
    const dieCount = parseInt(React.findDOMNode(this.refs.dieCount).value.trim(), 10);
    Meteor.call('roll', comment, dieCount);
  },

  render() {
    const dieCountOptions = _.range(10).map((i) => {
      i += 1;
      return (<option value={i} key={i}>{i}</option>);
    });
    return (
      <div className="container">
        <form className="roll-form" onSubmit={this.handleSubmit}>
          <label className="form-input-container">
            Note
            <input type="text" ref="comment" placeholder="Enter a note!" />
          </label>
          <label className="form-input-container">
            Number of Dice
            <select ref="dieCount" defaultValue="2">
              {dieCountOptions}
            </select>
          </label>
          <div className="form-input-container">
            <button type="submit">Roll!</button>
          </div>
        </form>
        <div className="roll-list-container">
          <h2>Previous Rolls</h2>
          <ul className="roll-list">
            {this.renderRolls()}
          </ul>
        </div>
      </div>
    );
  }
});
