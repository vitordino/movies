import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

const linkStyle = `
	display: block;
	text-decoration: none;
	color: currentColor;
	margin: -0.5rem;
	padding: 0.5rem;
	border-radius: 2rem;
	user-select: none;
	cursor: pointer;
`

const StyledLink = styled(Link)`
	${linkStyle}
	&:focus{${p => p.theme.focusShadow}}
`

const Button = styled.button`
	background: none;
	border: none;
	appearance: none;
	${linkStyle}
	&:focus{${p => p.theme.focusShadow}}
`

const Item = ({active, to, children}) => {
	if(active) return (
		<Button onClick={() => window.history.back()} style={{padding:'0.75rem', margin: '-0.75rem'}}>
			{children}
		</Button>
	)
	return (
		<StyledLink to={to} style={{padding:'0.75rem', margin: '-0.75rem'}} tabIndex={0}>
			{children}
		</StyledLink>
	)
}

export default Item
