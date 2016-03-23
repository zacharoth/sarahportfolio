var Col = require('react-bootstrap/lib/Col');
var Jumbotron = require('react-bootstrap/lib/Jumbotron');
var React = require('react');
var Row = require('react-bootstrap/lib/Row');

var About = React.createClass({
	
	render() {

		return (
			<Row>
				<Col md={10} mdOffset={1}>
					<Jumbotron style={{paddingLeft: 60, paddingRight: 60}}>
						<h1>Hi, I'm Sarah!</h1>
						<p>I'm into producing videos and travel. Click around to find out more!</p>
					</Jumbotron>
				</Col>
		  	</Row>
		);
	}
});

module.exports = About;