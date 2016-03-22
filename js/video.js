var React = require('react');
var ResponsiveEmbed = require('react-bootstrap/lib/ResponsiveEmbed');

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
			sunkim: {
				url: 'https://www.youtube.com/embed/Q7vtvDbd2mw?rel=0&amp;vq=hd720',
				copy: 'This is a video Sarah made while at the News Hour'
			}
		};

		return (
			<div>
				<ResponsiveEmbed a16by9>
	      			<iframe src={content[this.props.name].url} allowFullScreen></iframe>
	    		</ResponsiveEmbed>
	    		<div style={{marginTop: 20, marginLeft: 40, marginRight: 40}}>{content[this.props.name].copy}</div>
    		</div>
		);
	}
});

module.exports = Video;