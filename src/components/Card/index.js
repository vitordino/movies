import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { useFavoriteState } from 'utils/favorites'
import AspectRatio from 'components/AspectRatio'
import Text from 'components/Text'
import { Heart, Movie, Person, TV } from 'components/Icon'

const Wrapper = styled.div`
	background: none;
	border: none;
	margin: 0;
	flex: 1;
	display: flex;
	position: relative;
	background: ${p => p.error ? p.theme.colors.red : p.theme.colors.grey};
	border-radius: 0.1875rem;
	cursor: pointer;
	overflow: hidden;
`

const fill = `position: absolute; top: 0; bottom: 0; left: 0; right: 0;`

const Anchor = styled(Link)`
	appearance: none;
	width: 100%;
	color: currentColor;
	display: block;
	border-radius: 0.1875rem;
	${fill}
	&:focus{${p => p.theme.focusShadow}}
`

const AbsoluteFill = styled.div`
	${fill}
	display: flex;
	flex-direction: column-reverse;
	justify-content: space-between;
`

const OverflowHidden = styled(AbsoluteFill)`
	overflow: hidden;
	border-radius: 0.1875rem;
`

const Image = styled.img`
	display: block;
	object-fit: cover;
`

const Overlay = styled.div`
	width: 100%;
	margin-top: auto;
	display: flex;
	flex-direction: column-reverse;
	justify-content: space-between;
	background: ${p => p.theme.colors.overlay};
	box-shadow: 0 0.25rem 2rem 0 rgba(5,10,13,0.30);
	border-radius: 0 0 0.1875rem 0.1875rem;
	@media (hover: hover) {
		border-radius: 0.1875rem;
		height: 100%;
		background: none;
		box-shadow: none;
	}
	${Wrapper}:hover &, ${Wrapper}:focus-within &{
		background: ${p => p.theme.colors.overlay};
		box-shadow: 0 0.25rem 2rem 0 rgba(5,10,13,0.30);
	}
`

const HeartWrapper = styled.button`
	background: none;
	border: none;
	margin: 0;
	color: currentColor;
	top: 0;
	right: 0;
	left: auto;
	padding: 0.75rem;
	cursor: pointer;
	z-index: 1;
	position: absolute;
	@media (hover: hover) {
		margin-left: auto;
		position: relative;
		opacity: ${p => (p.isFavorite) ? 1 : 0};
	}
	${Wrapper}:hover &, ${Wrapper}:focus-within &{
		opacity: 1;
	}
`

const StyledHeart = styled(Heart)`
	transition: 0.2s all;
	${HeartWrapper}:focus &, ${HeartWrapper}:hover & {
		color: ${p => p.theme.colors.red};
	}
`

const Info = styled.div`
	color: currentColor;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: relative;
	padding: 0.75rem;
	cursor: pointer;
	@media (hover: hover) {opacity: 0;}
	${Wrapper}:hover &, ${Wrapper}:focus-within &{opacity: 1;}
`

const NoImage = styled.div`
	${fill}
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	color: ${p => p.theme.colors.midGrey};
`

const FavoriteButton = ({kindURL, id}) => {
	const [isFavorite, {toggle}] = useFavoriteState(kindURL+'/'+id)
	return (
		// eslint-disable-next-line no-sequences
		<HeartWrapper isFavorite={isFavorite} onClick={toggle}>
			<StyledHeart filled={isFavorite}/>
		</HeartWrapper>
	)
}

const LoadMore = styled(Text)`
	text-align: center;
	height: 100%;
	margin: auto;
	${Wrapper}:hover & {
		color: ${p => p.theme.colors.lightGrey};
	}
`

const Kind = styled.div`
	padding: 0.75rem;
	font-size: 0.75rem;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 0.025rem;
	color: transparent;
	${Wrapper}:hover & {
		color: ${p => p.theme.colors.lightGrey};
	}
`

const getKindURL = input => {
	if(input === 'movie') return 'movies'
	if(input === 'person') return 'people'
	return input
}

const Card = ({id, loading, error, loadMore, ...props}) => {

	const kind = props?.media_type
	const kindURL = getKindURL(props?.media_type) || props.kindURL
	const title = props?.title || props?.name
	const image = props?.poster_path || props?.profile_path
	const year = (props?.release_date || props?.first_air_date || props?.birthday)?.split('-')[0]

	return (
		<Wrapper error={error} {...props}>
			<AspectRatio ratio={0.75}/>
			<OverflowHidden>
				{image && <Image src={`https://image.tmdb.org/t/p/w500/${image}`}/>}
			</OverflowHidden>
			{loadMore && (
				<LoadMore xs={1} weight={500} color={p => p.theme.colors.midGrey}>Load<br/>More</LoadMore>
			)}
			<AbsoluteFill>
				{!image && !loading && !loadMore && (
					<NoImage>
						{kind === 'movie' && <Movie/>}
						{kind === 'tv' && <TV/>}
						{kind === 'person' && <Person/>}
					</NoImage>
				)}
				{!loadMore && (
					<Overlay>
						{title && (
							<Info>
								<Text xs={1} weight={500} style={{marginBottom: '0.25em'}}>{title}</Text>
								<Text color={p => p.theme.colors.lightGrey}>{year}</Text>
							</Info>
						)}
						<div style={{display: 'flex', alignItems: 'center'}}>
							<Kind style={{position: 'relative'}}>{kind}</Kind>
							{id && <FavoriteButton kindURL={kindURL} id={id} />}
						</div>
					</Overlay>
				)}
			</AbsoluteFill>
			{!(loading || error || loadMore) && (
				<Anchor to={`/${kindURL}/${id}`} tabIndex={0}/>
			)}
		</Wrapper>
	)
}

export default Card
