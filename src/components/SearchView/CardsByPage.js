import React, { Fragment, useEffect } from 'react'
import { useFetch } from 'react-hooks-fetch'
import { useInView } from 'react-intersection-observer'
import { getKindByURL } from 'utils/kind'
import { Cell } from 'components/Grid'
import Card from 'components/Card'
import InfoScreen from 'components/InfoScreen'

const getDataURL = (kindURL, search, page) => {
	const base = 'https://api.themoviedb.org/3'
	const api = process.env.REACT_APP_TMDB_KEY
	if(kindURL === 'featured') return ([
		`${base}/discover/movie`,
		`?api_key=${api}`,
		`&page=${page}`
	])
	return ([
		`${base}/search/${getKindByURL(kindURL)}`,
		`?api_key=${api}`,
		`&query=${search}`,
		`&page=${page}`,
	])
}

const InfiniteScroll = ({page, setPage}) => {
	useEffect(() => setPage(page + 1))
	return null
}

const CardsByPage = ({search, page, setPage, isLastPage, kindURL}) => {
	const { loading, data, error } = useFetch(getDataURL(kindURL, search, page).join(''))
	const [ref, inView] = useInView()

	if(error && search) return (
		<Cell xs={12}><InfoScreen emoji='❌' title='I’m sorry Dave' description='I’m afraid i can’t do that'/></Cell>
	)

	if(loading) return (Array(20).fill(0).map((x, i) => (
		<Cell key={i} xs={6} sm={4} md={3} xg={2}><Card key={i} loading/></Cell>
	)))

	if(data && !data?.results?.length) return (
		<Cell xs={12}><InfoScreen emoji='😕' title={`No results found for ${search}`} description='let’s try another one'/></Cell>
	)

	if(!data?.results?.length) return null

	const totalPages = data?.total_pages
	return (
		<Fragment>
			{data?.results?.map(entry => (
				<Cell key={entry.id} xs={6} sm={4} md={3} xg={2}>
					<Card kindURL={kindURL === 'featured' ? 'movies' : kindURL} {...entry}/>
				</Cell>
			))}
			{isLastPage && totalPages && totalPages > page && (
				<Cell xs={6} sm={4} md={3} xg={2}>
					<Card onClick={() => setPage(page + 1)} loadMore/>
					{page > 1 && <div ref={ref}>{inView && <InfiniteScroll page={page} setPage={setPage}/>}</div>}
				</Cell>
			)}
		</Fragment>
	)
}

export default CardsByPage
