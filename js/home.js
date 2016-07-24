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
					<CarouselItem animateIn={true} animateOut={true}>
						<Image src={tap} responsive />
					</CarouselItem>
					<CarouselItem animateIn={true} animateOut={true}>
						<Image src={reagan} responsive />
					</CarouselItem>
					<CarouselItem animateIn={true} animateOut={true}>
						<Image src={lines} responsive />
					</CarouselItem>
					<CarouselItem animateIn={true} animateOut={true}>
						<Image src={news} responsive />
					</CarouselItem>
					<CarouselItem animateIn={true} animateOut={true}>
						<Image src={denmark} responsive />
					</CarouselItem>
					<CarouselItem animateIn={true} animateOut={true}>
						<Image src={baby} responsive />
					</CarouselItem>
				</Carousel>
				{this.props.children}
			</div>
		);
	}
});

module.exports = Home;