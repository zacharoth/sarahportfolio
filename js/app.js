var React = require('react');

var App = React.createClass({
	
	render() {
	var header = "This is Sarah's portfolio!";

		return (
			<div style={{textAlign: 'center'}}>
				<h1 style={{color: 'purple'}}>{header}</h1>
				<h3 style={{fontStyle: 'italic'}}>You can look at her videos and stuff soon</h3>
			</div>
		);
	}
});

module.exports = App;