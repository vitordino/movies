import React, { useEffect, Fragment } from 'react'
import styled from 'styled-components'
import { useFetch } from 'react-hooks-fetch'
import { useStorageString } from 'utils/storage'
import Searchbar from 'components/Searchbar'
import Container from 'components/Container'
import { Row, Cell } from 'components/Grid'
import Card from 'components/Card'
import InfoScreen from 'components/InfoScreen'
import CardsByPage from './CardsByPage'

const Wrapper = styled.div`
	flex: 1
	display: flex;
	flex-direction: column;
	transition: 0.2s all;
`

const SearchView = () => {
	useEffect(() => {document.title = `Movies`}, [])
	const [search, setSearch] = useStorageString('')
	const { error, loading, data } = useFetch([
		`https://api.themoviedb.org/3/search/movie`,
		`?api_key=${process.env.REACT_APP_TMDB_KEY}`,
		`&query=${search}`,
	].join(''))

	const [pageString, setPage] = useStorageString('1')
	const page = +pageString
	const totalPages = data?.total_pages

	return(
		<Wrapper>
			<Searchbar
				value={search}
				onChange={e => {setSearch(e.target.value); setPage(1)}}
				style={{top: '1rem', position: 'sticky', zIndex: 1}}
			/>
			<Container>
				<Row vertical-gutter style={{marginTop: '2rem', marginBottom: '2rem'}}>
					<CardsByPage search={search} page={1}/>
					{(search && !loading && !!data?.results?.length) && (
						<Fragment>
							{page > 1 && Array(page).fill(0).map((x, i) => i+2).map(page => (
								<CardsByPage search={search} page={page}/>
							))}
							{totalPages && totalPages > page && (
								<Cell xs={6} sm={4} md={3} xg={2}>
									<Card onClick={() => setPage(page + 1)} loadMore/>
								</Cell>
							)}
						</Fragment>
					)}

					{search && loading && new Array(20).fill(0).map((x, i) => (
						<Cell key={i} xs={6} sm={4} md={3} xg={2}><Card loading/></Cell>
					))}
				</Row>
			</Container>
			{!search && <InfoScreen emoji='☝️' title='Search for movie titles' description='use the search bar above'/>}
			{search && error && <InfoScreen emoji='❌' title='I’m sorry Dave' description='I’m afraid i can’t do that'/>}
			{data && !data?.results?.length && <InfoScreen emoji='😕' title={`No results found for ${search}`} description='let’s try another one'/>}
		</Wrapper>
	)
}

export default SearchView
