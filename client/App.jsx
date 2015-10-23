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
    Meteor.call('roll');
  },

  render() {
    return (
      <div className="container">
          <form className="roll-me" onSubmit={this.handleSubmit} >
            <button type="submit">Roll!</button>
          </form>
        <ul className="roll-list">
          {this.renderRolls()}
        </ul>
      </div>
    );
  }
});
