var bs = require('react-bootstrap');
var React = require('react');

var About = React.createClass({
	
	render() {

		return (
		  <bs.Jumbotron style={{paddingLeft: 60, paddingRight: 60}}>
			    <h1>Hi, I'm Sarah!</h1>
			    <p>I'm into producing videos and travel. Click around to find out more!</p>
		  </bs.Jumbotron>
		);
	}
});

module.exports = About;