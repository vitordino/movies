import React, { Fragment } from 'react'
import { useFetch } from 'react-hooks-fetch'
import { Cell } from 'components/Grid'
import Card from 'components/Card'
import InfoScreen from 'components/InfoScreen'

const CardsByPage = ({kind, search, page, setPage, isLastPage}) => {
	const { loading, data, error } = useFetch([
		`https://api.themoviedb.org/3/search/${kind}`,
		`?api_key=${process.env.REACT_APP_TMDB_KEY}`,
		`&query=${search}`,
		`&page=${page}`,
	].join(''))

	if(error) return (
		<Cell xs={12}><InfoScreen emoji='❌' title='I’m sorry Dave' description='I’m afraid i can’t do that'/></Cell>
	)

	if(loading) return (Array(20).fill(0).map((x, i) => (
		<Cell key={i} xs={6} sm={4} md={3} xg={2}><Card loading/></Cell>
	)))


	if(data && !data?.results?.length) return (
		<Cell xs={12}><InfoScreen emoji='😕' title={`No results found for ${search}`} description='let’s try another one'/></Cell>
	)

	if(!data?.results?.length) return null

	const totalPages = data?.total_pages
	// return <pre>{JSON.stringify(data, null, 2)}</pre>
	return (
		<Fragment>
			{data?.results?.map(entry => (
				<Cell key={entry.id} xs={6} sm={4} md={3} xg={2}>
					<Card {...entry}/>
				</Cell>
			))}
			{isLastPage && totalPages && totalPages > page && (
				<Cell xs={6} sm={4} md={3} xg={2}>
					<Card onClick={() => setPage(page + 1)} loadMore/>
				</Cell>
			)}
		</Fragment>
	)
}

export default CardsByPage
