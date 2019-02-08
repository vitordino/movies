import React from 'react'
import styled from 'styled-components'
import Container from 'components/Container'
import Text from 'components/Text'

const Wrapper = styled(Container)`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 4rem auto;
	text-align: center;
	svg{color: ${p => p.theme.colors.grey}}
	a{color: currentColor}
`

const Emoji = styled.div`
	font-size: 3rem;
	margin: 0.5em;
`

const InfoScreen = ({emoji, title, description, ...props}) => (
	<Wrapper {...props}>
		{emoji && <Emoji>{emoji}</Emoji>}
		{title && <Text xs={1} md={2} weight={600} style={{margin: '1rem 0 0.5rem'}}>{title}</Text>}
		{description && <Text color={p => p.theme.colors.lightGrey}>{description}</Text>}
	</Wrapper>
)

export default InfoScreen
