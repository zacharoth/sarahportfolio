var MenuItem = require('react-bootstrap/lib/MenuItem');
var Nav = require('react-bootstrap/lib/Nav');
var Navbar = require('react-bootstrap/lib/Navbar');
var NavDropdown = require('react-bootstrap/lib/NavDropdown');
var NavItem = require('react-bootstrap/lib/NavItem');
var React = require('react');

var Header = React.createClass({
	
	propTypes: {
		navClick: React.PropTypes.func.isRequired,
	},

	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#" onClick={() => this.props.navClick('#')}>Sarah Corapi</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavDropdown title="Videos" id='videoDropdown'>
						<MenuItem onClick={() => this.props.navClick('#csk')} 
							href='#csk'>
							Christine Sun Kim
						</MenuItem>
						<MenuItem onClick={() => this.props.navClick('#nancyreagan')} 
							href='#nancyreagan'>
							Nancy Reagan Obituary
						</MenuItem>
					</NavDropdown>
					<NavItem href="https://drive.google.com/file/d/0B1yWL4Lc9hjcV19BOURyWmZVbm8/view?usp=sharing" target='_blank'>
						Resume
					</NavItem>
					<NavItem href='https://whirlednavigation.wordpress.com/' target='_blank'>Blog</NavItem>
					<NavItem onClick={() => this.props.navClick('#')} href="#">About</NavItem>
				</Nav>
			</Navbar>
		);
	}
});

module.exports = Header;