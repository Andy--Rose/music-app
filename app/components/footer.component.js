import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<p> 
					Jams from <img src="public/img/steezifyLogo.png" className="logo"/>
					& <img src="public/img/soundcloudLogo.jpeg" className="soundcloud"/>
				</p>
			</div>
		)
	}
}

export default Footer