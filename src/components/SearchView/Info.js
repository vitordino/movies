import React from 'react'
import InfoScreen from 'components/InfoScreen'

const Info = ({kind, ...props}) => {
	if(kind === 'movies') return (<InfoScreen title='Search for movie titles' {...props}/>)
	if(kind === 'tv') return (<InfoScreen title='Search for tv series' {...props}/>)
	if(kind === 'people') return (<InfoScreen title='Search for people' {...props}/>)
	return (
		<InfoScreen
			title={<span>Search for <a href='/movies'>movies</a>, <a href='/tv'>tv series</a> or <a href='/people'>people</a></span>}
			{...props}
		/>
	)
}

export default Info
