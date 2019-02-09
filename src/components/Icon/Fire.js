import React from 'react'

const Heart = ({
	size = 24,
	filled = false,
	color = 'currentColor',
	strokeWidth = '2',
	style,
	...props
}) => (
	<svg
		viewBox='0 0 24 24'
		strokeLinecap='square'
		strokeLinejoin='square'
		width={size}
		height={size}
		style={{display: 'block', ...style}}
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			stroke={color}
			fill={filled ? color : 'none'}
			strokeWidth={strokeWidth}
			d="M14.182 9.966S15.125 4.412 11.273 2c-.116352 1.929932-1.04875 3.719087-2.564 4.92C7.063 8.368 3.967 11.616 4 15.089c-.022483 3.023694 1.669766 5.799168 4.368 7.164.096045-1.352233.73215-2.608946 1.765-3.487.875693-.672893 1.443995-1.669674 1.577-2.766 2.305482 1.224578 3.796777 3.571676 3.926 6.179v.021c2.545328-1.167974 4.220488-3.664873 4.336-6.463.08399-2.817217-.862897-5.56827-2.663-7.737"
		/>
	</svg>
)

export default Heart
