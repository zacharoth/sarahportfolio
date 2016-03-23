var Col = require('react-bootstrap/lib/Col');
var React = require('react');
var ResponsiveEmbed = require('react-bootstrap/lib/ResponsiveEmbed');
var Row = require('react-bootstrap/lib/Row');

var Video = React.createClass({

	propTypes: {
		name: React.PropTypes.string.isRequired,
	},
	
	render() {

		var content = {
			nancyreagan: {
				url: 'https://www.youtube.com/embed/VESG6VuCS9c?rel=0&amp;vq=hd720',
				copy: 'Here is the stuff about this video'
			},
			csk: {
				url: 'https://www.youtube.com/embed/Q7vtvDbd2mw?rel=0&amp;vq=hd720',
				copy: 'This is a video Sarah made while at the News Hour'
			}
		};

		return (
			<Row>
				<Col md={3} mdOffset={1}>
					<div style={{marginTop: 32, marginBottom: 32, marginLeft: 4}}>{content[this.props.name].copy}</div>
				</Col>
 				<Col md={7}>
					<ResponsiveEmbed a16by9>
		      			<iframe src={content[this.props.name].url} allowFullScreen></iframe>
		    		</ResponsiveEmbed>
				</Col>
			</Row>
		);
	}
});

module.exports = Video;