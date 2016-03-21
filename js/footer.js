var bs = require('react-bootstrap');
var React = require('react');

var Footer = React.createClass({
	
	render() {

		return (
			<div className='footer'>
				<div className='container'>
					<bs.Row>
						<bs.Col md={4}>
							<a href='mailto:sarahcorapi@gmail.com'>sarahcorapi@gmail.com</a><br />
							Sarah Corapi &copy; 2016
							<span style={{marginLeft: 3, marginRight: 3}}>|</span>
							All Rights Reserved
						</bs.Col>
						<bs.Col md={4} mdOffset={4} style={{textAlign: 'right'}}>
							<a href='https://twitter.com/SarahCorapi' target='_blank'>@SarahCorapi</a><br />
							<a href='https://www.linkedin.com/in/sarahcorapi' target='_blank'>LinkedIn</a>
						</bs.Col>
					</bs.Row>
				</div>
			</div>
		);
	}
});

module.exports = Footer;