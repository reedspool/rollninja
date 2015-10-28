App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      rolls: Rolls.find({}, {sort: {createdAt: -1}}).fetch()
    }
  },

  render() {
    return (
      <div className="container">
        <SVGDefs />
        {this.props.content}
        <div className="roll-list-container">
          <h2>Previous Rolls</h2>
          <PreviousRolls rolls={this.data.rolls} />
        </div>
      </div>
    );
  }
});
