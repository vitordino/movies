export const getTitleFromURL = kind => {
	if(kind === 'multi') return 'Home'
	if(kind === 'movies') return 'Movies'
	if(kind === 'tv') return 'TV'
	if(kind === 'people') return 'Peole'
	return 'Error'
}

export const getKindByURL = input => {
	if(input === 'movies') return 'movie'
	if(input === 'people') return 'person'
	if(input === 'tv') return 'tv'
	return 'multi'
}
