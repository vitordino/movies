import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'
import { Row, Cell } from 'components/Grid'
import Section from './Section'
import Relation from './Relation'

const Anchor = styled(Link)`
	color: currentColor;
	text-decoration: none;
	display: block;
`

const Info = ({kind, ...data}) => {
	const description = data?.overview || data?.biography
	const genres = data?.genres?.map(x => x.name) || []
	const actors = data?.credits?.cast?.slice(0, 4) || []
	const directors = data?.credits?.crew?.filter(x => x.department === 'Directing') || []

	return(
		<Row>
			<Cell lg={10}>
				{description && <Section title='Plot'>{description}</Section>}
				<Row style={{justifyContent: 'space-between'}}>
					{!!genres.length && (
						<Cell>
							<Section title='Genres'>
								{genres.map(genre => <div key={genre}>{genre}</div>)}
							</Section>
						</Cell>
					)}
					{!!actors.length && (
						<Cell>
							<Section title={kind === 'person' ? 'Acted on' : 'Actors'}>
								{actors.map(actor => <Relation key={actor.id} kind={kind} {...actor}/>)}
							</Section>
						</Cell>
					)}
					{!!directors.length && (
						<Cell>
							<Section title={kind === 'person' ? 'Directed' : 'Directors'}>
								{directors.map(director => <Relation key={director.id} {...director}/>)}
							</Section>
						</Cell>
					)}
				</Row>
			</Cell>
		</Row>
	)
}

export default Info
