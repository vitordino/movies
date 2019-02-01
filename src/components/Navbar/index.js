import React from 'react'
import styled from 'styled-components'
import { Location, Link } from '@reach/router'
import Container from 'components/Container'
import { Heart } from 'components/Icon'

const Wrapper = styled.div`
	padding: 1.5rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const linkStyle = `
	display: block;
	text-decoration: none;
	color: currentColor;
	margin: -0.5rem;
	padding: 0.5rem;
	border-radius: 2rem;
	user-select: none;
`

const StyledLink = styled(Link)`
	${linkStyle}
	&:focus{${p => p.theme.focusShadow}}
`

const Logo = styled(StyledLink)`
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	vertical-align: 100px;
	font-size: 1.75rem;
	height: 3rem;
	width: 3rem;
`

const Button = styled.button`
	background: none;
	border: none;
	appearance: none;
	${linkStyle}
	&:focus{${p => p.theme.focusShadow}}
`

const Navbar = () => (
	<Container>
		<Wrapper>
			<Logo tabIndex={0} to='/'>
				<span role='img' aria-label='movies logo'>🍿</span>
			</Logo>
			<Location>
				{({location}) => (
					location.pathname !== '/favorites'
					? (
						<StyledLink to={'/favorites'} style={{padding:'0.75rem', margin: '-0.75rem'}} tabIndex={0}>
							<Heart style={{transform: 'translateY(1px)'}}/>
						</StyledLink>
					) : (
						<Button onClick={() => window.history.back()} style={{padding:'0.75rem', margin: '-0.75rem'}}>
							<Heart filled style={{transform: 'translateY(1px)'}}/>
						</Button>
					)
				)}
			</Location>
		</Wrapper>
	</Container>
)

export default Navbar
