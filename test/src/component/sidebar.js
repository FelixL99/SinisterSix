import React from 'react'¨;

import {slide as Menu } from 'react-burger-menu';

export default props => {
	return (

		<Menu>
			<a className="menu-item" href="google.se">
				Home
			</a>

			<a className="menu-item" href="yahoo.se">
				Some wierd place
			</a>	
		</Menu>

		)
}