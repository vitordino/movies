import React from 'react'
import styled from 'styled-components'
import InfoScreen from 'components/InfoScreen'
import Link from 'components/Link'

const Anchor = styled(Link)`
	border-radius: 0.125rem;
	color: currentColor;
	outline: none;
	&:focus, &:hover{
		color: ${p => p.theme.colors.yellow};
		text-decoration: none;
	}
`

const Info = ({kind, ...props}) => {
	if(kind === 'movies') return (<InfoScreen title='Search for movie titles' {...props}/>)
	if(kind === 'tv') return (<InfoScreen title='Search for tv series' {...props}/>)
	if(kind === 'people') return (<InfoScreen title='Search for people' {...props}/>)
	return (
		<InfoScreen
			title={<span>Search for <Anchor to='/movies'>movies</Anchor>, <Anchor to='/tv'>tv series</Anchor> or <Anchor to='/people'>people</Anchor></span>}
			{...props}
		/>
	)
}

export default Info
