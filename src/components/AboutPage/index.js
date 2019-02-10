import React, { useEffect } from 'react'
import styled from 'styled-components'
import Container from 'components/Container'
import { Row, Cell } from 'components/Grid'
import Text from 'components/Text'
import Link from 'components/Link'

const Wrapper = styled.div`
	flex: 1
	display: flex;
	flex-direction: column;
	transition: 0.2s all;
`

const Anchor = styled(Link)`
	border-radius: 0.125rem;
	color: currentColor;
	outline: none;
	&:focus, &:hover{
		color: ${p => p.theme.colors.yellow};
		text-decoration: none;
	}
`

const AboutPage = () => {
	useEffect(() => {document.title = 'About'})
	return(
		<Wrapper>
			<Container>
				<Text weight={600} xs={2} sm={3} md={4} xg={5}>About</Text>
				<Row vertical-gutter>
					<Cell xs={12} md={7} lg={6}>

						<Text xs={0} sm={1} style={{margin: '1em 0'}}>
							This app was done for educational porpuses, the source code can
							be found on the{' '}
							<Anchor to='https://github.com/vitordino/movies'>
								vitordino/movies
							</Anchor>
							{' '}github repo.
						</Text>

						<Text style={{margin: '1em 0'}}>
							The style is based on{' '}
							<Anchor to='https://significa.pt'>Significa</Anchor>’s
							styleguide for their{' '}
							<Anchor to='https://github.com/Significa/frontend-challenge'>
								frontend challenge
							</Anchor>
						</Text>

					</Cell>
				</Row>
			</Container>
		</Wrapper>
	)
}

export default AboutPage
