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

	const [pageString, setPage] = useStorageString('1')
	const page = +pageString
	const pagesArray = [...Array(page).fill(0).map((x, i) => i+1)]

	return(
		<Wrapper>
			<Searchbar
				value={search}
				onChange={e => {setSearch(e.target.value); setPage(1)}}
				style={{top: '1rem', position: 'sticky', zIndex: 1}}
			/>
			<Container>
				<Row vertical-gutter style={{marginTop: '2rem', marginBottom: '2rem'}}>
					{!!search && pagesArray.map(page => (
						<CardsByPage
							search={search}
							page={page}
							setPage={setPage}
							isLastPage={pagesArray.slice(-1) == page}
						/>
					))}
				</Row>
			</Container>
			{!search && <InfoScreen emoji='☝️' title='Search for movie titles' description='use the search bar above'/>}
		</Wrapper>
	)
}

export default SearchView
