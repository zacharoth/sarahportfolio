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
			<Navbar style={this.props.style}>
				<Navbar.Header>
					<Navbar.Brand>
						<a style={{fontSize: 22, fontWeight: 300}} href="#" 
							onClick={() => this.props.navClick('#')}>Sarah Corapi</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavDropdown title="Work" id='videoDropdown'>
						<MenuItem onClick={() => this.props.navClick('#nancyreagan')} 
							href='#nancyreagan'>
							{'Nancy Reagan Obituary'}
						</MenuItem>
						<MenuItem onClick={() => this.props.navClick('#csk')} 
							href='#csk'>
							{'Christine Sun Kim'}
						</MenuItem>
						<MenuItem onClick={() => this.props.navClick('#familyleave')}
							href='#familyleave'>
							{'Paid Family Leave in the U.S.'}
						</MenuItem>
						<MenuItem onClick={() => this.props.navClick('#nfl')}
							href='#nfl'>
							{'Concussions and the NFL'}
						</MenuItem>
					</NavDropdown>
					<NavItem href="https://drive.google.com/file/d/0B_Cv88qPNOjfUzQ3dEtYSkxxRnM/view?usp=sharing" target='_blank'>
						Resume
					</NavItem>
					<NavItem href='https://whirlednavigation.wordpress.com/' target='_blank'>Blog</NavItem>
					<NavItem onClick={() => this.props.navClick('#about')} href="#about">About</NavItem>
				</Nav>
			</Navbar>
		);
	}
});

module.exports = Header;