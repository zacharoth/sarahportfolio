require('bootstrap/dist/css/bootstrap.css');
require('../sass/main.scss');
var About = require('./about');
var bs = require('react-bootstrap');
var Footer = require('./footer');
var Header = require('./header');
var React = require('react');
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
				return <Video url='https://www.youtube.com/embed/VESG6VuCS9c' />;
			default:
				return <About />;
		}
	},

	render() {

		return (
			<div>
				<Header navClick={this.navClick}/>
				<div className='main-content'>
					<bs.Row>
						<bs.Col md={10} mdOffset={1}>
							{ this.renderMainContent() }
						</bs.Col>
					</bs.Row>
				</div>
				<Footer />
			</div>
		);
	}
});

module.exports = App;