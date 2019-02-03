import React from 'react'
import styled from 'styled-components'
import Container from 'components/Container'
import { Github } from 'components/Icon'

const Wrapper = styled.div`
	padding: 1.5rem 0;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
`

const Anchor = styled.a`
	display: block;
	text-decoration: none;
	color: currentColor;
	margin: -0.5rem;
	padding: 0.5rem;
	border-radius: 0.125rem;
	font-weight: 300;
	color: ${p => p.theme.colors.grey};
	&:hover, &:focus {color: ${p => p.theme.colors.lightGrey}}
	&:focus{${p => p.theme.focusShadow}}
	& strong{
		font-weight: 500;
	}
`


const Footer = () => (
	<Container>
		<Wrapper>
			<Anchor href='https://significa.pt'>design: <strong>significa</strong></Anchor>
			<Anchor href='https://github.com/vitordino/movies' style={{padding: '0.375rem'}}><Github/></Anchor>
			<Anchor href='https://vitordino.com'>dev: <strong>vitordino</strong></Anchor>
		</Wrapper>
	</Container>
)

export default Footer
