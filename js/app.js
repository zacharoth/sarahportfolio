require('bootstrap/dist/css/bootstrap.css');
require('../sass/main.scss');
var About = require('./about');
var Footer = require('./footer');
var Header = require('./header');
var Home = require('./home');
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
			case '#about':
				return <About />;
			default:
				return false;
		}
	},

	render() {
		var mainContent = this.renderMainContent();
		if (mainContent) {
			return (
				<div>
					<Header navClick={this.navClick}/>
					<div className='main-content'>
						<div className='container' style={{marginBottom: 20}}>
							{ mainContent }
						</div>
					</div>
					<Footer />
				</div>
			);
		} else {
			return (
				<div>
					<Header navClick={this.navClick} style={{zIndex: 1, marginBottom: 0, opacity: .7,
						position: 'absolute', top: 0, left: 0, width: '100%'}}/>
					<Home style={{zIndex: 0}} />
					<Footer style={{opacity: .7}}/>
				</div>
			);
		}
	}
});

module.exports = App;