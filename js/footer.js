var Col = require('react-bootstrap/lib/Col');
var React = require('react');
var Row = require('react-bootstrap/lib/Row');

var Footer = React.createClass({
	
	render() {

		return (
			<div className='footer' style={this.props.style}>
				<div className='container'>
					<Row>
						<Col xs={4}>
							<a href='mailto:sarahcorapi@gmail.com'>sarahcorapi@gmail.com</a><br />
							Sarah Corapi &copy; 2016
							<span style={{marginLeft: 3, marginRight: 3}}>|</span>
							All Rights Reserved
						</Col>
						<Col xs={4} xsOffset={4} style={{textAlign: 'right'}}>
							<a href='https://twitter.com/SarahCorapi' target='_blank'>@SarahCorapi</a><br />
							<a href='https://www.linkedin.com/in/sarahcorapi' target='_blank'>LinkedIn</a><br />
							<a href='https://github.com/zacharoth' target='_blank' 
								style={{fontSize: 10, fontStyle: 'italic'}}>
								Built with love by Zach Roth
							</a>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
});

module.exports = Footer;