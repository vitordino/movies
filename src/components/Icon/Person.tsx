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
			<path d="M24 14c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/>
			<path d="M29 46H19l-1-8h-6l4.411-16.763C16.758 19.919 17.95 19 19.313 19h9.375c1.363 0 2.554.919 2.901 2.237L36 38h-6l-1 8z"/>
		</g>
	</svg>
)

export default Movie
