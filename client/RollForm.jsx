const MAXIMUM_DICE = 10;

RollForm = React.createClass({
  handleSubmit(event) {
    event.preventDefault();
    const comment = React.findDOMNode(this.refs.comment).value.trim();
    const dieCount = parseInt(React.findDOMNode(this.refs.dieCount).value.trim(), 10);
    Meteor.promise('roll', comment, dieCount).then((id) => {
      FlowRouter.go('/:rollId', { rollId: id });
    });
  },

  render() {
    const dieCountOptions = _.range(MAXIMUM_DICE).map((i) => {
      i += 1;
      return (<option value={i} key={i}>{i}</option>);
    });
    return (
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
    )
  }
});
