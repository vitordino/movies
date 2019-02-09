import React from 'react'
import styled from 'styled-components'
import { Location, Link } from '@reach/router'
import Container from 'components/Container'
import { Heart, Fire } from 'components/Icon'
import Item from './Item'

const Wrapper = styled.div`
	padding: 1.5rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Logo = styled(Link)`
	text-decoration: none;
	color: currentColor;
	margin: -0.5rem;
	padding: 0.5rem;
	border-radius: 2rem;
	user-select: none;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	vertical-align: 100px;
	font-size: 1.75rem;
	height: 3rem;
	width: 3rem;
	&:focus{${p => p.theme.focusShadow}}
`

const Flex = styled.div`
	display: flex;
	align-items: center;
`

const Navbar = () => (
	<Container>
		<Wrapper>
			<Logo tabIndex={0} to='/'>
				<span role='img' aria-label='movies logo'>🍿</span>
			</Logo>
			<Location>
				{({location: {pathname}}) => (
					<Flex>
						<Item to='/featured' active={pathname === '/featured'}>
							<Fire filled={pathname === '/featured'} style={{transform: 'translateY(1px)'}}/>
						</Item>
						<Item to='/favorites' active={pathname === '/favorites'}>
							<Heart filled={pathname === '/favorites'} style={{transform: 'translateY(1px)'}}/>
						</Item>
					</Flex>
				)}
			</Location>
		</Wrapper>
	</Container>
)

export default Navbar
