require('bootstrap/dist/css/bootstrap.css');
require('../sass/main.scss');
var About = require('./about');
var Col = require('react-bootstrap/lib/Col');
var Footer = require('./footer');
var Header = require('./header');
var React = require('react');
var Row = require('react-bootstrap/lib/Row');
var Video = require('./video');

var App = React.createClass({
	
	getInitialState() {
		return {
			path: location.hash,
		};
	},

	navClick(path) {
		if (path !== this.state.path) {
			this.setState({
				path: path,
			});
		}
	},

	renderMainContent() {
		switch(this.state.path) {
			case '#nancyreagan':
				return <Video name='nancyreagan' />;
			case '#sunkim':
				return <Video name='sunkim' />;
			default:
				return <About />;
		}
	},

	render() {

		return (
			<div>
				<Header navClick={this.navClick}/>
				<div className='main-content'>
					<Row>
						<Col md={10} mdOffset={1} style={{marginBottom: 20}}>
							{ this.renderMainContent() }
						</Col>
					</Row>
				</div>
				<Footer />
			</div>
		);
	}
});

module.exports = App;