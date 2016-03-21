var bs = require('react-bootstrap');
var React = require('react');

var Header = React.createClass({
	
	propTypes: {
		navClick: React.PropTypes.func.isRequired,
	},

	render() {
		return (
			<bs.Navbar>
				<bs.Navbar.Header>
					<bs.Navbar.Brand>
						<a href="#" onClick={() => this.props.navClick('#')}>Sarah Corapi</a>
					</bs.Navbar.Brand>
				</bs.Navbar.Header>
				<bs.Nav>
					<bs.NavDropdown title="Videos">
						<bs.MenuItem onClick={() => this.props.navClick('#')} 
							href="https://vimeo.com/77957602" target="_blank">
							PBS NewsHour
						</bs.MenuItem>
						<bs.MenuItem onClick={() => this.props.navClick('#nancyreagan')} 
							href='#nancyreagan'>
							Nancy Reagan Obituary
						</bs.MenuItem>
						<bs.MenuItem onClick={() => this.props.navClick('#')}>Nashville</bs.MenuItem>
						<bs.MenuItem onClick={() => this.props.navClick('#')}>YouTube Channel</bs.MenuItem>
					</bs.NavDropdown>
					<bs.NavItem href="https://drive.google.com/file/d/0B1yWL4Lc9hjcV19BOURyWmZVbm8/view?usp=sharing" target='_blank'>
						Resume
					</bs.NavItem>
					<bs.NavItem href='https://whirlednavigation.wordpress.com/' target='_blank'>Blog</bs.NavItem>
					<bs.NavItem onClick={() => this.props.navClick('#')} href="#">About</bs.NavItem>
				</bs.Nav>
			</bs.Navbar>
		);
	}
});

module.exports = Header;