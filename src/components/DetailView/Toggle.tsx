import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
	${p => p.theme.typography[0]};
	border: none;
	padding: 0.25rem 0.5rem;;
	width: 100%;
	background: transparent;
	color: ${p => p.theme.colors.midGrey};
	border-radius: 0.25rem;
	margin-top: 0.5rem;
	cursor: pointer;
	&:focus{${p => p.theme.focusShadow}}
	&:hover, &:focus{
		background: ${p => p.theme.colors.grey};
		color: ${p => p.theme.colors.lightGrey};
	}
`

const Toggle = ({more, ...props}) => (
	<Wrapper {...props}>
		{!!more ? 'More' : 'Fewer'}
	</Wrapper>
)

export default Toggle
