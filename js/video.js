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
				header: 'A powerful tribute to the life of Nancy Reagan.',
				copy: 'I served as Production Assistant, finding archival footage and photos, selecting shots/soundbites, and facilitating editing for the piece.',
				tagline: "Produced for <a href='http://www.pbs.org/newshour/rundown/former-first-lady-nancy-reagan-dies/' target='_blank'>PBS NewsHour</a>, 2016.",
			},
			csk: {
				url: 'https://www.youtube.com/embed/Q7vtvDbd2mw?rel=0&amp;vq=hd720',
				header: 'Deaf since birth, artist Christine Sun Kim explores the social rules of sound.',
				copy: 'I pitched, produced, filmed, wrote, and edited this story with the help of producer Victoria Fleischer.',
				tagline: "Produced for <a href='http://www.pbs.org/newshour/art/artist-chistine-sun-kim-cannot-hear-creates-with-sound/' target='_blank'>PBS NewsHour</a>, 2015."
			},
			familyleave: {
				url: 'https://www.youtube.com/embed/Cl3sxZszpSk?rel=0&amp;vq=hd720&amp;start=74',
				header: "In the U.S., why haven't maternity leave laws kept pace with the increase of working parents?",
				copy: 'I served as asistant shooter, helping chronicle the experience of Claire Prestwood',
				tagline: "Produced for <a href='http://www.pbs.org/newshour/bb/u-s-support-paid-family-leave-one-pay/' target='_blank'>PBS NewsHour</a>, 2015.",
			},
			nfl: {
				url: 'https://www.youtube.com/embed/cJDBJh3U2xk?rel=0&amp;vq=hd720&amp;start=136',
				header: 'Will changing the sports culture reduce youth concussions?',
				copy: 'I served as talent booker and coordinator; finding, pre-interviewing and securing former NFL player Fred McCrary for the segment.',
				tagline: "Produced for <a href='http://www.pbs.org/newshour/bb/health-july-dec13-concussions_10-30/' target='_blank'>PBS NewsHour</a>, 2015.",
			},
		};

		return (
			<Row>
				<Col md={3} mdOffset={1}>
					<div style={{marginTop: 32, marginBottom: 32, marginLeft: 4, fontSize: 16}}>
						<p style={{fontWeight: 'bold'}}>{content[this.props.name].header}</p>
						<p>{content[this.props.name].copy}</p>
						<p dangerouslySetInnerHTML={{__html: content[this.props.name].tagline}} />
					</div>
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