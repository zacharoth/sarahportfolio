var Carousel = require('react-bootstrap/lib/Carousel');
var CarouselItem = require('react-bootstrap/lib/CarouselItem');
var Col = require('react-bootstrap/lib/Col');
var Image = require('react-bootstrap/lib/Image');
var React = require('react');
var Row = require('react-bootstrap/lib/Row');

var baby = require('../images/baby.jpg');
var denmark = require('../images/denmark.jpg');
var lines = require('../images/lines.jpg');
var news = require('../images/news.jpg');
var reagan = require('../images/reagan.jpg');
var tap = require('../images/tap.jpg');

var Home = React.createClass({
	
	render() {

		return (
			<div>
				<Carousel controls={false} indicators={false} interval={6000} pauseOnHover={false}>
					<CarouselItem>
						<Image src={tap} style={{height: '100%', width: '100%'}} />
					</CarouselItem>
					<CarouselItem>
						<Image src={reagan} style={{height: '100%', width: '100%'}} />
					</CarouselItem>
					<CarouselItem>
						<Image src={lines} style={{height: '100%', width: '100%'}} />
					</CarouselItem>
					<CarouselItem>
						<Image src={news} style={{height: '100%', width: '100%'}} />
					</CarouselItem>
					<CarouselItem>
						<Image src={denmark} style={{height: '100%', width: '100%'}} />
					</CarouselItem>
					<CarouselItem>
						<Image src={baby} style={{height: '100%', width: '100%'}} />
					</CarouselItem>
				</Carousel>
				{this.props.children}
			</div>
		);
	}
});

module.exports = Home;