import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'

const Wrapper = styled(Link)`
	color: currentColor;
	text-decoration: none;
	display: flex;
	align-items: center;
	overflow: hidden;
	border-radius: 1rem;
	&:focus{${p => p.theme.focusShadow}}
	&+&{margin-top: 0.5rem}
`

const Avatar = styled.div`
	width: 1.5rem;
	height: 1.5rem;
	overflow: hidden;
	border-radius: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 0.5rem;
	background: ${p => p.theme.colors.grey};
	color: ${p => p.theme.colors.lightGrey};
	font-size: 0.625rem;
	line-height: 0.625rem;
	font-weight: 500;
	user-select: none;
	pointer-events: none;
	flex-shrink: 0;
	img{width: 100%}
`

const Main = styled.div`
	margin-right: 0.5rem;
`

const getURL = (kind, id) => {
	if(kind === 'person') return `/movies/${id}`
	return `/people/${id}`
}

const Relation = ({id, kind, name, poster_path, profile_path, character, title, ...props}) => {
	const url = getURL(kind, id)
	const image = profile_path || poster_path
	const main = name || title || character
	return (
		<Wrapper to={url} {...props}>
			<Avatar>
				{image
					? <img src={`https://image.tmdb.org/t/p/w45/${image}`}/>
					: <div>{(main || ' ')[0]}</div>
				}
			</Avatar>
			<Main>{main}</Main>
		</Wrapper>
	)
}

export default Relation
