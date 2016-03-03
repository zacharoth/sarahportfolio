require('bootstrap/dist/css/bootstrap.css');
var bs = require('react-bootstrap');
var React = require('react');

var App = React.createClass({
	
	render() {
	var header = "This is Sarah's portfolio!";

		return (
			<div>
				<bs.Navbar>
					<bs.Navbar.Header>
						<bs.Navbar.Brand>
							<a href="#">Sarah Corapi</a>
						</bs.Navbar.Brand>
					</bs.Navbar.Header>
					<bs.Nav>
						<bs.NavDropdown eventKey={1} title="Videos">
							<bs.MenuItem eventKey={1.1} href="https://vimeo.com/77957602" target="_blank">PBS NewsHour</bs.MenuItem>
							<bs.MenuItem eventKey={1.2}>Nashville</bs.MenuItem>
							<bs.MenuItem eventKey={1.3}>YouTube Channel</bs.MenuItem>
						</bs.NavDropdown>
						<bs.NavItem eventKey={2} href="#">Resume</bs.NavItem>
						<bs.NavItem eventKey={3} href="#">About</bs.NavItem>
					</bs.Nav>
				</bs.Navbar>
			</div>
		);
	}
});

module.exports = App;