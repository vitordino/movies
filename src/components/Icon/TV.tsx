import React from 'react'

const Movie = ({
	size = 48,
	filled = false,
	color = 'currentColor',
	strokeWidth = 2,
	style,
	...props
}) => (
	<svg
		viewBox='0 0 48 48'
		strokeLinecap='round'
		strokeLinejoin='round'
		width={size}
		height={size}
		style={{display: 'block', ...style}}
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<g fill='none' stroke={color} strokeWidth={strokeWidth}>
			<path d='M18 6l6 8M24 14L34 2'/>
			<path d='M42 46H6c-2.209 0-4-1.791-4-4V18c0-2.209 1.791-4 4-4h36c2.209 0 4 1.791 4 4v24c0 2.209-1.791 4-4 4z'/>
			<path d='M8 20h26v20H8zM40 20v2M40 30v10'/>
		</g>
	</svg>
)

export default Movie
