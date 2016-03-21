var bs = require('react-bootstrap');
var React = require('react');

var Video = React.createClass({

	propTypes: {
		url: React.PropTypes.string.isRequired,
	},
	
	render() {

		return (
			<iframe width="560" height="315" src={this.props.url} frameBorder="0" allowFullScreen></iframe>
		);
	}
});

module.exports = Video;