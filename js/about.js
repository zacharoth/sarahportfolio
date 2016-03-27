var Carousel = require('react-bootstrap/lib/Carousel');
var CarouselItem = require('react-bootstrap/lib/CarouselItem');
var Col = require('react-bootstrap/lib/Col');
var Image = require('react-bootstrap/lib/Image');
var Jumbotron = require('react-bootstrap/lib/Jumbotron');
var React = require('react');
var Row = require('react-bootstrap/lib/Row');

var baby = require('../images/baby.jpg');
var denmark = require('../images/denmark.jpg');
var lines = require('../images/lines.jpg');
var news = require('../images/news.jpg');
var reagan = require('../images/reagan.jpg');
var tap = require('../images/tap.jpg');

var About = React.createClass({
	
	render() {

		return (
			<Row>
				<Col md={10} mdOffset={1}>
					<Jumbotron style={{paddingLeft: 60, paddingRight: 60}}>
						<p style={{fontWeight: 'bold'}}>Bringing experiences to life through video.</p>
						<p style={{fontSize: 18}}>
							From journalism to advertising to narrative film, my passion is producing videos. In my
							work with independent businesses, marketing/media agencies, and big broadcasters like 
							PBS and NBC, I’ve gained experience in all elements of production and post-production: 
							shooting, editing, writing, hosting, directing, producing and more. I also bring business 
							and project management experience to the table. It’s this versatility and knowledge that 
							gives me an edge in all projects I take on. 
						</p>
						<p style={{fontSize: 18}}>
							Whether it be changing people’s behaviors, bringing an issue to light, capturing a 
							moment in time, or simply telling a great story, my method of choice is video.
						</p>
					</Jumbotron>
					<Row>
						<Col xs={2}>
							<Image src={baby} responsive />
						</Col>
						<Col xs={2}>
							<Image src={denmark} responsive />
						</Col>
						<Col xs={2}>
							<Image src={reagan} responsive />
						</Col>
						<Col xs={2}>
							<Image src={lines} responsive />
						</Col>
						<Col xs={2}>
							<Image src={news} responsive />
						</Col>
						<Col xs={2}>
							<Image src={tap} responsive />
						</Col>
					</Row>
				</Col>
		  	</Row>
		);
	}
});

module.exports = About;