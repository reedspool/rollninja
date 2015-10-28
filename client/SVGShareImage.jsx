SVGShareImage = React.createClass({
  propTypes: {
    height:  React.PropTypes.number,
    width:  React.PropTypes.number,
    roll: React.PropTypes.object.isRequired
  },

  getDefaultProps() {
    return {
      height:  154,
      width:  250.7
    }
  },

  // TODO: This utility seems like it could be better placed
  total(roll) {
    return roll.dice.reduce((total, die) => {
            return total + die.result;
          }, 0)
  },

  // TODO: This utility seems like it could be better placed 
  // ALSO DRY OUT, copied and pasted from DiceRoll.jsx
  // ALSO abstract out the domain so we can deploy from anywhere
  makeUrl(roll) {
    return 'http://rollninja.meteor.com/' + roll._id
  },

  protectiveWrapping(text) {
    return { __html: text }
  },

  markupUrl(url) {
    return `<text id="roll-page-url-text_2_" transform="matrix(1 0 0 1 21.8598 133.8965)" font-family="'MyriadPro-Regular'" font-size="10px">${url}</text>`
  },

  markupTitle(value) {
    return `<text transform="matrix(1 0 0 1 68.4662 25.1035)" font-family="'MyriadPro-Regular'" font-size="12px">I rolled a die and got ${value}!</text>`
  },

  render() {
    const roll = this.props.roll;

    if (!roll) {
      return (<div></div>)
    };

    const value = this.total(roll);
    const title = this.markupTitle(value);
    const url = this.markupUrl(this.makeUrl(roll));
    const height = this.props.height;
    const width = this.props.width;

    const safeUrl = this.protectiveWrapping(url)
    const safeTitle = this.protectiveWrapping(title)

    return (
      <svg version="1.1" height={height} width={width} >
        <g id="roll-die-wrapper">
          <SVGSixSidedDie value={value} />
        </g>
        <g id="roll-page-url" dangerouslySetInnerHTML={safeUrl} />
        <g id="roll-title" dangerouslySetInnerHTML={safeTitle}  />
      </svg>
    );
  }
});

