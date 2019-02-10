import React from 'react'
import InfoScreen from 'components/InfoScreen'
import Link from 'components/Link'

const Info = ({kind, ...props}) => {
	if(kind === 'movies') return (<InfoScreen title='Search for movie titles' {...props}/>)
	if(kind === 'tv') return (<InfoScreen title='Search for tv series' {...props}/>)
	if(kind === 'people') return (<InfoScreen title='Search for people' {...props}/>)
	return (
		<InfoScreen
			title={<span>Search for <Link to='/movies'>movies</Link>, <Link to='/tv'>tv series</Link> or <Link to='/people'>people</Link></span>}
			{...props}
		/>
	)
}

export default Info
