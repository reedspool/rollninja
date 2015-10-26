SVGSixSidedDie = React.createClass({
  propTypes: {
    value: React.PropTypes.number.isRequired,
    height:  React.PropTypes.string,
    width:  React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      value: 1,
      height:  198,
      width:  210
    }
  },

  render() {
    const value = this.props.value;
    const height = this.props.height;
    const width = this.props.width;

    const symbolId = "#die" + value;

    // Straight from react docs for dangerouslySetInnerHTML
    function createMarkup() { return { __html: `<use xlink:href="${symbolId}" />` }; };

    return (
      <svg className="die-svg-use" dangerouslySetInnerHTML={createMarkup()} height={height} width={width} />
    );
  }
});

