SVGSixSidedDie = React.createClass({
  propTypes: {
    value: React.PropTypes.number.isRequired
  },

  render() {
    const value = this.props.value;

    const id = "#die" + (value || 1);

    const injectedUseTag = '<use xlink:href="' + id + '" />';

    const injectedSvgTag = '<svg class="die-svg-use" xmlns="http://www.w3.org/2000/svg">'
        + injectedUseTag
        + '</svg>';
    return (
      <div>
        {{injectedSvgTag}}
      </div>
    );
  }
});

