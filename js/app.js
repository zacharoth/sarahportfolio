require('bootstrap/dist/css/bootstrap.css');
require('../sass/main.scss');
var About = require('./about');
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
				return <Video name='nancyreagan' />;
			case '#csk':
				return <Video name='csk' />;
			case '#nfl':
				return <Video name='nfl' />;
			case '#familyleave':
				return <Video name='familyleave' />;
			case '#copenhagen':
				return <Video name='copenhagen' />;
			default:
				return <About />;
		}
	},

	render() {

		return (
			<div>
				<Header navClick={this.navClick}/>
				<div className='main-content'>
					<div className='container' style={{marginBottom: 20}}>
						{ this.renderMainContent() }
					</div>
				</div>
				<Footer />
			</div>
		);
	}
});

module.exports = App;