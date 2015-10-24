SVGSixSidedDie = React.createClass({
  propTypes: {
    value: React.PropTypes.number.isRequired
  },

  render() {
    const value = this.props.value;

    const id = "#die" + (value || 1);

function createMarkup() { return { __html: '<use xlink:href="' + id + '" />' }; };

    return (
      <svg className="die-svg-use" dangerouslySetInnerHTML={createMarkup()} />
    );
  }
});

