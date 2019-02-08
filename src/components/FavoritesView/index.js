import React, { Fragment, useEffect } from 'react'
import styled from 'styled-components'
import { useFavorites } from 'utils/favorites'
import Container from 'components/Container'
import { Row, Cell } from 'components/Grid'
import FetchCard from 'components/Card/FetchCard'
import InfoScreen from 'components/InfoScreen'
import Text from 'components/Text'
import { HeartBreak } from 'components/Icon'

const Wrapper = styled.div`
	flex: 1
	display: flex;
	flex-direction: column;
	transition: 0.2s all;
`

const getTitle = length => `${!length ? 'no favorites' : `${length} ${length > 1 ? `favorites`: `favorite`}`}`

const SearchView = () => {
	const [favoritesSet] = useFavorites()
	const favorites = [...favoritesSet] || []
	useEffect(() => {document.title = 'Movies ⠿ ' + getTitle(favorites.length)}, [favorites.length])

	return(
		<Wrapper>
			<Container>
				{!favorites.length ? (
					<InfoScreen
						emoji={<HeartBreak size={96} style={{margin: '1rem'}}/>}
						title='You still have no favorites'
						description='you can add movies to your favorites clicking on the ♥ icon'
					/>
				) : (
					<Fragment>
						<Text weight={600} xs={2} sm={3} md={4} xg={5}>{getTitle(favorites.length)}</Text>
						<Row vertical-gutter style={{marginTop: '2rem', marginBottom: '2rem'}}>
							{favorites.map(favorite => (
								<Cell key={favorite} xs={6} sm={4} md={3} xg={2}>
									<FetchCard
										kindURL={favorite?.split('/')[0]}
										id={favorite?.split('/')[1]}
									/>
								</Cell>
							))}
						</Row>
					</Fragment>
				)}
			</Container>
		</Wrapper>
	)
}

export default SearchView
