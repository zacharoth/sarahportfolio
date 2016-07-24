var Col = require('react-bootstrap/lib/Col');
var Image = require('react-bootstrap/lib/Image');
var Jumbotron = require('react-bootstrap/lib/Jumbotron');
var React = require('react');
var Row = require('react-bootstrap/lib/Row');
var sarah = require('../images/sarah.jpg');

var About = React.createClass({
	
	render() {

		return (
			<Row>
				<Col md={3}>
					<Image src={sarah} responsive />
				</Col>
				<Col md={9}>
					<Jumbotron style={{paddingLeft: 60, paddingRight: 60}}>
						<p style={{fontWeight: 'bold'}}>Bringing experiences to life through video.</p>
						<p style={{fontSize: 18}}>
							From journalism to advertising to narrative film, my passion is producing videos. In my
							work with independent businesses, marketing/media agencies, and broadcast networks like 
							PBS and NBC, I’ve gained a variety of production and post-production experience. I also 
							bring business and project management skills to the table. It’s this versatility and 
							knowledge that gives me an edge in all projects I take on. 
						</p>
						<p style={{fontSize: 18}}>
							Whether it be changing people’s behaviors, bringing an issue to light, capturing a 
							moment in time, or simply telling a great story, my medium is video.
						</p>
						<p style={{fontSize: 18}}>
							For questions or inquiries, contact me at <a href='mailto:sarahcorapi@gmail.com'>sarahcorapi@gmail.com</a>.
						</p>
					</Jumbotron>
				</Col>
		  	</Row>
		);
	}
});

module.exports = About;